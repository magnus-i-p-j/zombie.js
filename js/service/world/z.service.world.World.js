goog.provide('z.service.world.World');

goog.require('mugd.injector.Injector');
goog.require('goog.debug.Logger');
goog.require('z.service');
goog.require('z.common.Cashier');

goog.require('z.common.rulebook');
goog.require('z.common.protocol');
goog.require('z.common.EntityRepository');
goog.require('goog.array');
goog.require('mugd.utils.SimplexNoise');
goog.require('z.common.EntityQuery');
goog.require('z.service.world.ZombieDistributor');

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
  this._entityRepository = /** @type {!z.common.EntityRepository} */ services.get(z.common.Resources.REPOSITORY);
  /**
   * @type {!z.common.rulebook.Rulebook}
   * @private
   */
  this._rulebook = /** @type {!z.common.rulebook.Rulebook} */ services.get(z.common.Resources.RULEBOOK);
  /**
   * @type {!z.service.world.ITerrainGenerator}
   * @private
   */
  this._terrainGenerator = /** @type {!z.service.world.ITerrainGenerator} */services.get(z.service.Resources.TERRAIN_GENERATOR);

  /**
   * @type {number}
   * @private
   */
  this._turn = 0;

  /**
   * @type {string}
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
  var worldActorData = new z.common.data.ActorData(null, z.common.protocol.state.MODIFIED, 'actor_world', {});

  /**
   * @type {!z.common.entities.Actor}
   * @private
   */
  this._worldActor = /** @type {!z.common.entities.Actor} */ this._entityRepository.put(worldActorData);

  /**
   * @type {!z.service.world.CharacterGenerator}
   */
  var characterGenerator = /** @type {!z.service.world.CharacterGenerator} */services.get(z.service.Resources.CHARACTER_GENERATOR);
  this._createCharacters(this._rulebook, characterGenerator, this._worldActor);

  /**
   * @type {Object.<!mugd.utils.guid, function(!z.common.data.StartTurnData)>}
   * @private
   */
  this._actorCallbacks = {};
};

/**
 * @type {!goog.debug.Logger}
 * @protected
 */
z.service.world.World.prototype._logger = goog.debug.Logger.getLogger('z.service.world.World');

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
  var actorData = new z.common.data.ActorData(null, z.common.protocol.state.MODIFIED, 'actor_player', this._rulebook.gameStartingData.startingResources);
  var actor = /** @type {!z.common.entities.Actor} */ this._entityRepository.put(actorData);
  this._playerActors[actor.guid] = actor;
  this._actorCallbacks[actor.guid] = actorCallback;
  return z.common.data.ActorData.fromEntity(actor);
};

/**
 * @param {z.common.data.ClientEndTurn} endTurnData
 */
z.service.world.World.prototype.actorEndTurn = function(endTurnData) {
  var actor = /** @type {!z.common.entities.Actor} */ this._entityRepository.get(endTurnData.actorId);
  goog.array.forEach(endTurnData.entities,
    function(entityData) {
      if (entityData instanceof z.common.data.ProjectData) {
        this.updateProject(/** @type {!z.common.data.ProjectData} */ entityData, actor);
      } else if (entityData instanceof z.common.data.CharacterData) {
        this.updateCharacter(/** @type {!z.common.data.CharacterData} */ entityData, actor);
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
    var characters = this._entityRepository.choose(startingNumberOfCharacters, query);
    goog.array.forEach(characters, function(character) {
      character.update(null, null, actor);
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
  var killed = this.tick();
  for (var actorGuid in this._playerActors) {
    if (this._playerActors.hasOwnProperty(actorGuid)) {
      var startTurn = this.createStartTurnData(actorGuid, killed);
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
z.service.world.World.prototype.createStartTurnData = function(actorGuid, killed) {
  var tiles = this.getVisibleTiles();
  var visibleProjects = this.getVisibleProjects();
  var characters = this.getVisibleCharacters();
  var entities = [];
  goog.array.extend(entities, tiles, visibleProjects, characters);
  entities.push(z.common.data.ActorData.fromEntity(this._playerActors[actorGuid]));
  /**
   * @type {!z.common.data.StartTurnData}
   */
  var startTurn = new z.common.data.StartTurnData(actorGuid, entities, killed, this._turn, this._season);
  return startTurn;
};

/**
 * @returns {!Array.<z.common.data.TileData>}
 */
z.service.world.World.prototype.getVisibleTiles = function() {
  var tiles = this._entityRepository.map(
    function(entity) {
      var tile = /** @type {!z.common.entities.Tile} */ entity;
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
      var project = /** @type {!z.common.entities.Project} */ item;
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
      var character = /** @type {!z.common.entities.Character} */ item;
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
 * @returns {Array.<!mugd.utils.guid>}
 */
z.service.world.World.prototype.tick = function() {
  this._entityRepository.cleanUp();
  this._endProjects();

  this._consumeUpkeep();
  var killed = this._entityRepository.resetState();
  this._expandWorld();

  this._advanceProjects();
  this._endProjects();

  this._distributeZombies();
  this._advanceTime();

  //Special events
  var globalEffects = [];

  globalEffects = globalEffects.concat(this._checkGameOver());

  this._entityRepository.cleanUp();
  return killed;
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

z.service.world.World.prototype._checkGameOver = function() {



};

z.service.world.World.prototype._endProjects = function() {
  var projects = this._entityRepository.filter(function(entity) {
    if (entity instanceof z.common.entities.Project && entity.getState() === z.common.protocol.state.KILL) {
      return true;
    }
    return false
  });

  goog.array.forEach(projects, function(project) {
    var triggerParams = {
      'end': true
    };
    var effects = project.trigger(triggerParams);
    this._applyEffects(effects, project);
  }, this);

};

/**
 * @private
 */
z.service.world.World.prototype._consumeUpkeep = function() {
  var self = this;
  self._entityRepository.map(function(entity) {
    var owner = self._entityRepository.get(entity.owner);
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

  var results = {};

  goog.array.forEach(projects, function(project) {
    results[project.guid] = this._advanceProject(project);
  }, this);

  return results;
};

z.service.world.World.prototype._advanceProject = function(project) {

  /**
   * @type {!z.common.entities.Actor}
   */
  var owner = /** @type {!z.common.entities.Actor}*/ this._entityRepository.get(project.owner);
  var tile = /** @type {!z.common.entities.Tile}*/ this._entityRepository.get(project.tile);
  var stockpile = owner.stockpile;

  var cost = project.getRemainingCost();
  var initialCompletion = project.completion;

  var isAssignedTo = function(entity) {
    if (entity instanceof z.common.entities.Character) {
      var character = /** @type {!z.common.entities.Character} */ entity;
      return character.assignedTo === project.guid;
    }
    return false;
  };
  var work = new z.common.Stockpile();
  var calculateWork = function(character) {
    work.add(z.common.STATIC + 'combat', character.combat);
    work.add(z.common.STATIC + 'knowledge', character.knowledge);
    work.add(z.common.STATIC + 'labour', character.labour);
  };
  this._entityRepository.map(calculateWork, isAssignedTo);

  var time = new z.common.Stockpile();
  time.add(z.common.STATIC + 'time', 1);

  var cashier = new z.common.Cashier(work, time, stockpile);
  var investment = cashier.withdraw(cost);

  var shouldTriggerComplete = project.advance(investment);

  tile.addZombieActivity(((project.completion - initialCompletion) * project.activity) | 0);

  var triggerParams = {
    'complete': shouldTriggerComplete,
    'season': this._season,
    'end': false
  };
  var effects = project.trigger(triggerParams);

  return this._applyEffects(effects, project);
};

/**
 * @param {Array.<z.common.rulebook.effect>} effects
 * @param {z.common.entities.Project} project
 * @returns {Array.<z.common.rulebook.result>}
 * @private
 */
z.service.world.World.prototype._applyEffects = function(effects, project) {
  var results = goog.array.map(
    effects,
    function(effect) {
      return this['_apply_' + effect['type']](effect['args'], project);
    },
    this
  );
  return results;
};

/**
 *
 * @param {z.common.rulebook.effect_stockpile} effect
 * @param {z.common.entities.Project} project
 */
z.service.world.World.prototype['_apply_effect_stockpile'] = function(effect, project) {
  var owner = /** @type {!z.common.entities.Actor}*/ this._entityRepository.get(project.owner);
  goog.array.forEach(effect, function(resource) {
    owner.stockpile.add(resource['type'], resource['magnitude']);
  }, this);
};

/**
 * @param {z.common.rulebook.effect_terrain} effect
 * @param {z.common.entities.Project} project
 */
z.service.world.World.prototype['_apply_effect_terrain'] = function(effect, project) {
  var tile = /** @type {!z.common.entities.Tile}*/ this._entityRepository.get(project.tile);
  var tileData = z.common.data.TileData.fromEntity(tile);
  var terrainMeta = this._rulebook.getMetaClass(effect);
  tileData.terrain = /** @type {z.common.terrain} */ goog.object.unsafeClone(tileData.terrain);
  tileData.terrain[terrainMeta.zone] = effect;
  this._entityRepository.put(tileData);
};

/**
 * @param {z.common.rulebook.effect_cull_zombies} effect
 * @param {z.common.entities.Project} project
 */
z.service.world.World.prototype['_apply_effect_cull_zombies'] = function(effect, project) {
  var tile = /** @type {!z.common.entities.Tile} */ this._entityRepository.get(project.tile);
  var isAssignedTo = function(entity) {
    if (entity instanceof z.common.entities.Character) {
      var character = /** @type {!z.common.entities.Character} */ entity;
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

  var magnitude = -1 * (totalCombat * effect.skill + effect.magnitude);
  tile.addZombieDensity(magnitude);

};

/**
 * @param {z.common.rulebook.effect_end} effect
 * @param {z.common.entities.Project} project
 */
z.service.world.World.prototype['_apply_effect_end'] = function(effect, project) {
  if (effect) {
    project.setState(z.common.protocol.state.KILL);
  }
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
