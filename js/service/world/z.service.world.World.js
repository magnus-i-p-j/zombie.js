goog.provide('z.service.world.World');

goog.require('mugd.injector.Injector');
goog.require('goog.debug.Logger');
goog.require('z.service');
goog.require('z.common.Cashier');

goog.require('z.common.rulebook');
goog.require('z.common.protocol');
goog.require('z.common.EntityRepository');
goog.require('goog.array');
goog.require('goog.object');
goog.require('mugd.utils.SimplexNoise');
goog.require('z.common.EntityQuery');
goog.require('z.service.world.ZombieDistributor');
goog.require('z.service.world.WorkCalculator');
goog.require('z.common.messages');
goog.require('z.common.messages.MessageBuilder');
goog.require('z.common.Stockpile');
goog.require('z.common.queries');


/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements {mugd.injector.IInjectable}
 */
z.service.world.World = function(services) {
  /**
   * @type {!z.common.EntityRepository}
   * @private
   */
  this._entityRepository = /** @type {!z.common.EntityRepository} */ (services.get(z.common.Resources.REPOSITORY));
  /**
   * @type {!z.common.rulebook.Rulebook}
   * @private
   */
  this._rulebook = /** @type {!z.common.rulebook.Rulebook} */ (services.get(z.common.Resources.RULEBOOK));
  /**
   * @type {!z.service.world.ITerrainGenerator}
   * @private
   */
  this._terrainGenerator = /** @type {!z.service.world.ITerrainGenerator} */ (services.get(z.service.Resources.TERRAIN_GENERATOR));

  /**
   * @type {number}
   * @private
   */
  this._turn = 0;

  /**
   * @type {?string}
   * @private
   */
  this._season = null;

  /**
   * @type {mugd.utils.Grid}
   * @private
   */
  this._tiles = new mugd.utils.Grid();
  /**
   * @type { Object.<!mugd.utils.guid, !z.common.entities.Actor> }
   * @private
   */
  this._playerActors = {};
  var worldActorData = new z.common.data.ActorData(null, z.common.protocol.state.MODIFIED, 'actor_world', {}, 0);

  /**
   * @type {!z.common.entities.Actor}
   * @private
   */
  this._worldActor = /** @type {!z.common.entities.Actor} */ (this._entityRepository.put(worldActorData));

  /**
   * @type {!z.service.world.CharacterGenerator}
   */
  var characterGenerator = /** @type {!z.service.world.CharacterGenerator} */ (services.get(z.service.Resources.CHARACTER_GENERATOR));
  this._createCharacters(this._rulebook, characterGenerator, this._worldActor);

  /**
   * @type {Object.<!mugd.utils.guid, function(!z.common.data.StartTurnData)>}
   * @private
   */
  this._actorCallbacks = {};

  this._gameEnder = /** @type {!z.service.world.GameEnder} */ (services.get(z.service.Resources.GAME_ENDER));
};

/**
 * @type {!goog.debug.Logger}
 * @protected
 */
z.service.world.World.prototype._logger = goog.debug.LogManager.getLogger('z.service.world.World');

/**
 *
 * @param {!z.common.rulebook.Rulebook} rulebook
 * @param {!z.service.world.CharacterGenerator} characterGenerator
 * @param {!z.common.entities.Actor} owner
 * @private
 */
z.service.world.World.prototype._createCharacters = function(rulebook, characterGenerator, owner) {
  goog.array.forEach(rulebook.archetypes, function(archetype) {
    for (var i = 0; i < archetype.frequency; i += 1) {
      characterGenerator.getCharacterByArchetype(archetype.type, owner.guid)
    }
  });
};

/**
 * @param {function(!z.common.data.StartTurnData)} actorCallback
 * @return {!z.common.data.ActorData}
 */
z.service.world.World.prototype.createPlayerActor = function(actorCallback) {
  var actorData = new z.common.data.ActorData(null, z.common.protocol.state.MODIFIED, 'actor_player', this._rulebook.gameStartingData.startingResources, 0);
  var actor = /** @type {!z.common.entities.Actor} */ (this._entityRepository.put(actorData));
  this._playerActors[actor.guid] = actor;
  this._actorCallbacks[actor.guid] = actorCallback;
  return z.common.data.ActorData.fromEntity(actor);
};

/**
 * @param {z.common.data.ClientEndTurn} endTurnData
 */
z.service.world.World.prototype.actorEndTurn = function(endTurnData) {
  var actor = /** @type {!z.common.entities.Actor} */ (this._entityRepository.get(endTurnData.actorId));
  goog.array.forEach(endTurnData.entities,
    function(entityData) {
      if (entityData instanceof z.common.data.ProjectData) {
        var projectData = /** @type {!z.common.data.ProjectData} */ (entityData);
        this.updateProject(projectData, actor);
      } else if (entityData instanceof z.common.data.CharacterData) {
        var characterData = /** @type {!z.common.data.CharacterData} */ (entityData);
        this.updateCharacter(characterData, actor);
      }
    }, this
  );

  this.endTurn();
};

/**
 * @param {!z.common.data.ProjectData} projectData
 * @param {!z.common.entities.Actor} actor
 * @private
 */
z.service.world.World.prototype.updateProject = function(projectData, actor) {
  var project = this._entityRepository.get(projectData.guid);
  if (goog.isDefAndNotNull(project) && project.owner !== actor.guid) {
    this._logger.warning('project is not owned by the correct actor');
  } else {
    this._logger.info('Received project service side');
    this._entityRepository.put(projectData);
  }
};

/**
 * @param {!z.common.data.CharacterData} characterData
 * @param {!z.common.entities.Actor} actor
 * @private
 */
z.service.world.World.prototype.updateCharacter = function(characterData, actor) {
  var character = this._entityRepository.get(characterData.guid);
  if (goog.isDefAndNotNull(character) && character.owner !== actor.guid) {
    this._logger.warning('character is not owned by the correct actor');
  } else {
    this._logger.info('Received character service side');
    character.assignTo(characterData.assignedTo);
  }
};

z.service.world.World.prototype._doBeforeFirstTurn = function() {
  var startingNumberOfCharacters = 10;
  goog.object.forEach(this._playerActors, function(actor) {
    var query = new z.common.EntityQuery();
    query.owner = this._worldActor.guid;
    query.category = z.common.rulebook.category.CHARACTER_TYPE;
    var characters = this._entityRepository.choose(startingNumberOfCharacters, query);
    goog.array.forEach(characters, function(character) {
      character.update(null, null, actor.guid);
    })
  }, this);

  this._expandWorld();

  this._distributeZombies();
};

/**
 * @private
 */
z.service.world.World.prototype.endTurn = function() {
  console.log('World.endTurn begins');
  this._logger.info('World.endTurn begins');
  if (!this._turn) {
    this._doBeforeFirstTurn();
  }
  var tickResult = this.tick();
  var killed = tickResult.killed;
  var messages = tickResult.messages;
  for (var actorGuid in this._playerActors) {
    if (this._playerActors.hasOwnProperty(actorGuid)) {
      var startTurn = this.createStartTurnData(actorGuid, killed, messages);
      this._actorCallbacks[actorGuid](startTurn);
    }
  }
  this._logger.info('World.endTurn ends');
  console.log('World.endTurn ends');
};

/**
 * @param  {Array.<!mugd.utils.guid>} killed
 * @param {mugd.utils.guid} actorGuid
 * @returns {!z.common.data.StartTurnData}
 */
z.service.world.World.prototype.createStartTurnData = function(actorGuid, killed, messageBuilders) {
  var tiles = this.getVisibleTiles();
  var visibleProjects = this.getVisibleProjects();
  var characters = this.getVisibleCharacters();
  var entities = [];
  var messages = goog.array.map(
    goog.array.filter(messageBuilders,
      /**
       * @param {z.common.messages.MessageBuilder} mb
       * @returns {boolean}
       */
      function(mb) {
        return !mb.empty();
      }
    ),
    /**
     * @param {z.common.messages.MessageBuilder} mb
     * @returns {z.common.messages.message}
     */
    function(mb) {
      return mb.build();
    }
  );
  goog.array.extend(entities, tiles, visibleProjects, characters);
  entities.push(z.common.data.ActorData.fromEntity(this._playerActors[actorGuid]));
  /**
   * @type {!z.common.data.StartTurnData}
   */
  var startTurn = new z.common.data.StartTurnData(actorGuid, entities, killed, messages, this._turn, this._season);
  return startTurn;
};

/**
 * @returns {!Array.<z.common.data.TileData>}
 */
z.service.world.World.prototype.getVisibleTiles = function() {
  var tiles = this._entityRepository.map(
    function(entity) {
      var tile = /** @type {!z.common.entities.Tile} */ (entity);
      return z.common.data.TileData.fromEntity(tile);
    },
    function(entity) {
      return entity.meta.category === z.common.rulebook.category.TILE;
    }
  );
  return tiles;
};

/**
 * @returns {!Array.<z.common.data.ProjectData>}
 */
z.service.world.World.prototype.getVisibleProjects = function() {
  var visibleProjects = this._entityRepository.map(
    function(item) {
      var project = /** @type {!z.common.entities.Project} */ (item);
      return z.common.data.ProjectData.fromEntity(project);
    },
    function(entity) {
      if (entity instanceof z.common.entities.Project) {
        return true;
      }
      return false;
    });
  return visibleProjects;
};

/**
 * @returns {!Array.<z.common.data.CharacterData>}
 */
z.service.world.World.prototype.getVisibleCharacters = function() {
  var characters = this._entityRepository.map(
    function(item) {
      var character = /** @type {!z.common.entities.Character} */ (item);
      return z.common.data.CharacterData.fromEntity(character);
    },
    function(entity) {
      if (entity instanceof z.common.entities.Character) {
        return true;
      }
      return false;
    });
  return characters;
};

/**
 * @returns {{
 * killed: Array.<!mugd.utils.guid>,
 * messages: Array.<Object>
 * }}
 */
z.service.world.World.prototype.tick = function() {
  this._entityRepository.cleanUp();
  this._endProjects();

  this._consumeUpkeep();
  var killed = this._entityRepository.resetState();
  this._expandWorld();

  var messages = [];
  messages = goog.array.concat(messages, this._advanceProjects());
  messages = goog.array.concat(messages, this._endProjects());

  this._distributeZombies();
  this._advanceTime();

  goog.object.forEach(this._playerActors, function(actor) {
    var effects = this._checkGameOver(actor);
    var msg = new z.common.messages.MessageBuilder(actor);
    this._applyEffects(effects, actor, msg);
    messages.push(msg);
  }, this);

  this._entityRepository.cleanUp();

  return {
    killed: killed,
    messages: messages
  };
};

/**
 * @private
 */
z.service.world.World.prototype._distributeZombies = function() {
  var distributor = new z.service.world.ZombieDistributor();
  var query = new z.common.EntityQuery();
  query.category = z.common.rulebook.category.TILE;
  var tiles = this._entityRepository.filter(query.match.bind(query));
  distributor.distribute(tiles);
};

z.service.world.World.prototype._advanceTime = function() {
  this._turn += 1;
  var year = this._rulebook.year;
  this._season = year[(this._turn - 1) % year.length];
};

z.service.world.World.prototype._checkGameOver = function(actor) {
  var query = new z.common.EntityQuery();
  query.owner = actor.guid;
  query.alive = true;
  query.category = z.common.rulebook.category.CHARACTER_TYPE;
  var people = this._entityRepository.filter(query);
  var triggerArgs = {
    'turn': this._turn,
    'people': people.length
  };
  return this._gameEnder.getEffects(triggerArgs);
};

z.service.world.World.prototype._endProjects = function() {
  var projects = this._entityRepository.filter(function(entity) {
    if (entity instanceof z.common.entities.Project && entity.getState() === z.common.protocol.state.KILL) {
      return true;
    }
    return false
  });

  var messages = goog.array.map(projects, function(project) {
    var triggerParams = {
      'end': true
    };
    var msg = new z.common.messages.MessageBuilder(project);
    var effects = project.trigger(triggerParams);
    this._applyEffects(effects, project, msg);
    return msg;
  }, this);

  return messages;
};

/**
 * @private
 */
z.service.world.World.prototype._consumeUpkeep = function() {
  var self = this;
  self._entityRepository.map(function(entity) {

    //TODO: Should all entities always have an owner?
    /**
     * @type {mugd.utils.guid}
     */
    var entityOwnerGuid = /** @type {mugd.utils.guid} */ (entity.owner);

    var owner = self._entityRepository.get(entityOwnerGuid);
   if (!owner){
     debugger;
   }
    var stockpile = owner.stockpile;

    goog.object.forEach(entity.meta.upkeep, function(value, name) {
      var taken = stockpile.take(name, value);
      if (taken !== value) {
        entity.setState(z.common.protocol.state.KILL);
      }
    });
  }, function(entity) {
    return entity.owner !== self._worldActor.guid;
  });
};

/**
 * @private
 */
z.service.world.World.prototype._advanceProjects = function() {
  /**
   * @type {!Array.<!z.common.entities.Project>}
   */
  var projects = this._entityRepository.filter(function(entity) {
    if (entity instanceof z.common.entities.Project && entity.getState() !== z.common.protocol.state.DEAD) {
      return true;
    }
    return false
  });

  projects.sort(function(lhs, rhs) {
    return lhs.priority - rhs.priority;
  });

  var globalWork = {};
  var messages = goog.array.map(projects, function(project) {
    if (!globalWork[project.owner]) {
      //TODO: Should all entities always have an owner?
      /**
       * @type {mugd.utils.guid}
       */
      var projectOwnerGuid = /** @type {mugd.utils.guid} */ (project.owner);

      globalWork[project.owner] = z.service.world.WorkCalculator.calculateWithRepository(
        this._entityRepository,
        z.common.queries.getUnassignedQuery(projectOwnerGuid)
      );
    }

    var msg = new z.common.messages.MessageBuilder(project);
    this._advanceProject(project, msg, globalWork[project.owner]);
    console.log('globalWork', globalWork[project.owner].peekAll());
    return msg;
  }, this);


  return messages;
};

/**
 * @param {!z.common.entities.Project} project
 * @param {!z.common.messages.MessageBuilder} message
 * @param {!z.common.Stockpile} globalWork
 * @returns {*}
 * @private
 */
z.service.world.World.prototype._advanceProject = function(project, message, globalWork) {

  //TODO: Should all entities always have an owner?
  /**
   * @type {mugd.utils.guid}
   */
  var projectOwnerGuid = /** @type {mugd.utils.guid} */ (project.owner);
  /**
   * @type {!z.common.entities.Actor}
   */
  var owner = /** @type {!z.common.entities.Actor}*/ (this._entityRepository.get(projectOwnerGuid));
  /**
   * @type {mugd.utils.guid}
   */
  var tileGuid = /** @type {mugd.utils.guid} */ (project.tile);
  var tile = /** @type {!z.common.entities.Tile}*/ (this._entityRepository.get(tileGuid));
  var stockpile = owner.stockpile;

  var cost = project.getRemainingCost();
  var initialCompletion = project.completion;

  var isAssignedTo = function(entity) {
    if (entity instanceof z.common.entities.Character) {
      var character = /** @type {!z.common.entities.Character} */ (entity);
      return character.assignedTo === project.guid;
    }
    return false;
  };

  var work = z.service.world.WorkCalculator.calculateWithRepository(this._entityRepository, isAssignedTo);

  var time = new z.common.Stockpile();
  time.add(z.common.STATIC + 'time', 1);

  var cashier = new z.common.Cashier(work, time, stockpile, globalWork);
  var investment = cashier.withdraw(cost);

  var shouldTriggerComplete = project.advance(investment);

  tile.addZombieActivity(((project.completion - initialCompletion) * project.activity) | 0);

  var triggerParams = {
    'complete': shouldTriggerComplete,
    'season': this._season,
    'end': false
  };
  var effects = project.trigger(triggerParams);

  return this._applyEffects(effects, project, message);
};

/**
 * @param {Array.<z.common.rulebook.effect>} effects
 * @param {z.common.entities.Entity} entity
 * @param {z.common.messages.MessageBuilder} message
 * @private
 */
z.service.world.World.prototype._applyEffects = function(effects, entity, message) {

  goog.array.forEach(
    effects,
    function(effect) {
      this['_apply_' + effect['type']](effect['args'], entity, message);
    },
    this
  );
};

/**
 * @param {z.common.rulebook.effect_stockpile} effect
 * @param {z.common.entities.Project} project
 * @param {z.common.messages.MessageBuilder} message
 */
z.service.world.World.prototype['_apply_effect_stockpile'] = function(effect, project, message) {
  //TODO: Should all entities always have an owner?
  /**
   * @type {mugd.utils.guid}
   */
  var projectOwnerGuid = /** @type {mugd.utils.guid} */ (project.owner);
  var owner = /** @type {!z.common.entities.Actor}*/ (this._entityRepository.get(projectOwnerGuid));
  goog.array.forEach(effect, function(resource) {
    owner.stockpile.add(resource['type'], resource['magnitude']);
    message.addStockpileMessage(owner, resource['type'], resource['magnitude']);
  }, this);
};

/**
 * @param {z.common.rulebook.effect_terrain} effect
 * @param {z.common.entities.Project} project
 * @param {z.common.messages.MessageBuilder} message
 */
z.service.world.World.prototype['_apply_effect_terrain'] = function(effect, project, message) {
  /**
   * @type {mugd.utils.guid}
   */
  var tileGuid = /** @type {mugd.utils.guid} */ (project.tile);
  var tile = /** @type {!z.common.entities.Tile}*/ (this._entityRepository.get(tileGuid));
  var tileData = z.common.data.TileData.fromEntity(tile);
  var terrainMeta = this._rulebook.getMetaClass(effect);
  tileData.terrain = /** @type {z.common.terrain} */ (goog.object.unsafeClone(tileData.terrain));
  tileData.terrain[terrainMeta.zone] = effect;
  this._entityRepository.put(tileData);
  message.addTerrainMessage(tile, effect);
};

/**
 * @param {z.common.rulebook.effect_cull_zombies} effect
 * @param {z.common.entities.Project} project
 * @param {z.common.messages.MessageBuilder} message
 */
z.service.world.World.prototype['_apply_effect_cull_zombies'] = function(effect, project, message) {
  /**
   * @type {mugd.utils.guid}
   */
  var tileGuid = /** @type {mugd.utils.guid} */ (project.tile);
  var tile = /** @type {!z.common.entities.Tile} */ (this._entityRepository.get(tileGuid));
  var isAssignedTo = function(entity) {
    if (entity instanceof z.common.entities.Character) {
      var character = /** @type {!z.common.entities.Character} */ (entity);
      return character.assignedTo === project.guid;
    }
    return false;
  };
  var getCombat = function(character) {
    return character.combat;
  };

  var add = function(x, y) {
    return x + y;
  };

  var totalCombat = goog.array.reduce(this._entityRepository.map(getCombat, isAssignedTo), add, 0, this);

  var magnitude = (-1 * (totalCombat * effect.skill + effect.magnitude)) | 0;
  tile.addZombieDensity(magnitude);
  message.addCullZombieMessage(tile, magnitude);
};

/**
 * @param {z.common.rulebook.effect_end} effect
 * @param {z.common.entities.Project} project
 * @param {z.common.messages.MessageBuilder} message
 */
z.service.world.World.prototype['_apply_effect_end'] = function(effect, project, message) {
  if (effect) {
    project.setState(z.common.protocol.state.KILL);
    message.addProjectEndedMessage(project);
  }
};

/**
 * @param {z.common.entities.Actor} actor
 * @param {z.common.rulebook.effect_game_over} effect
 * @param {z.common.messages.MessageBuilder} message
 */
z.service.world.World.prototype['_apply_effect_game_over'] = function(effect, actor, message) {
  //TODO: Actually do something after a loss/win
  if (effect === 'victory') {
    console.log('Victory!');
  } else {
    console.log('Defeat!');
  }
  message.addGameOverMessage(actor, effect === 'victory');
};

/**
 * @param {z.common.rulebook.effect_message} effect
 * @param {z.common.entities.Actor} actor
 * @param {z.common.messages.MessageBuilder} message
 */
z.service.world.World.prototype['_apply_effect_message'] = function(effect, actor, message) {
  message.addMessage(actor, effect.text);
  message.setLevel(effect.level);
};

/**
 * @param {z.common.rulebook.effect_points} effect
 * @param {z.common.entities.Entity} entity
 * @param {z.common.messages.MessageBuilder} message
 */
z.service.world.World.prototype['_apply_effect_points'] = function(effect, entity, message) {
  //TODO: Should all entities always have an owner?
  /**
   * @type {mugd.utils.guid}
   */
  var ownerGuid = /** @type {mugd.utils.guid} */ (entity.owner);
  var actor = this._entityRepository.get(ownerGuid);
  actor.addPoints(effect);
  message.addPointsMessage(actor, effect);
};

/**
 * @param {z.common.rulebook.effect_points} effect
 * @param {z.common.entities.Actor} actor
 * @param {z.common.messages.MessageBuilder} message
 */
z.service.world.World.prototype['_apply_effect_points_per_character'] = function(effect, actor, message) {
  var query = new z.common.EntityQuery();
  query.owner = actor.guid;
  query.alive = true;
  query.category = z.common.rulebook.category.CHARACTER_TYPE;
  var people = this._entityRepository.filter(query);
  var points = people.length * effect;
  actor.addPoints(points);
  message.addPointsMessage(actor, points);
};

/**
 * @private
 */
z.service.world.World.prototype._expandWorld = function() {
  var x_min = -10;
  var x_max = 10;
  var y_min = -10;
  var y_max = 10;
  this._entityRepository.map(
    function(entity) {
      var range = z.service.world.World.actionRange(entity);
      x_min = Math.min(x_min, entity.position.x - range);
      x_max = Math.max(x_max, entity.position.x + range);
      y_min = Math.min(y_min, entity.position.y - range);
      y_max = Math.max(y_max, entity.position.y + range);
    },
    function(entity) {
      return !goog.isNull(entity.position);
    }
  );
  for (var y = y_min; y <= y_max; y++) {
    for (var x = x_min; x <= x_max; x++) {
      if (!goog.isDef(this._tiles.getNode(x, y))) {
        var tileData = this._terrainGenerator.generateTerrain(x, y);
        tileData.ownerId = this._worldActor.guid;
        var tile = this._entityRepository.put(tileData);
        this._tiles.setNode(x, y, tile);
      }
    }
  }
};

/**
 * @param {!z.common.entities.Entity} entity
 * @return number
 */
z.service.world.World.actionRange = function(entity) {
  if (entity.vision) {
    return entity.vision + 5;
  }
  return 0;
};
