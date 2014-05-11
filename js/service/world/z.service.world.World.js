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

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements {mugd.injector.IInjectable}
 */
z.service.world.World = function (services) {
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
  var characterGenerator = /** @type {!z.service.world.CharacterGenerator} */services.get(z.common.Resources.CHARACTER_GENERATOR);

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
z.service.world.World.prototype._createCharacters = function (rulebook, characterGenerator, owner) {
  goog.array.forEach(rulebook.archetypes, function (archetype) {
    for (var i = 0; i < archetype.frequency; i += 1) {
      characterGenerator.getCharacterByArchetype(archetype.type, owner.guid)
    }
  });
};

/**
 * @param {function(!z.common.data.StartTurnData)} actorCallback
 * @return {!z.common.data.ActorData}
 */
z.service.world.World.prototype.createPlayerActor = function (actorCallback) {
  var actorData = new z.common.data.ActorData(null, z.common.protocol.state.MODIFIED, 'actor_player', this._rulebook.gameStartingData.startingResources);
  var actor = /** @type {!z.common.entities.Actor} */ this._entityRepository.put(actorData);
  this._playerActors[actor.guid] = actor;
  this._actorCallbacks[actor.guid] = actorCallback;
  return  z.common.data.ActorData.fromEntity(actor);
};

/**
 * @param {z.common.data.ClientEndTurn} endTurnData
 */
z.service.world.World.prototype.actorEndTurn = function (endTurnData) {
  var actor = this._entityRepository.get(endTurnData.actorId);
  goog.array.forEach(endTurnData.projects,
    function (projectData) {
      this.updateProject(projectData, actor);
    }, this
  );

  this.endTurn();
};

/**
 * @param projectData
 * @param actor
 * @private
 */
z.service.world.World.prototype.updateProject = function (projectData, actor) {
  var project = this._entityRepository.get(projectData.guid);
  if (goog.isDefAndNotNull(project) && project.owner !== actor) {
    this._logger.warning('project is not owned by the correct actor');
  } else {
    this._logger.info('Received project service side');
    this._entityRepository.put(projectData);
  }
};

z.service.world.World.prototype._doBeforeFirstTurn = function(){
  var startingNumberOfCharacters = 3;
  goog.object.forEach(this._playerActors, function(actor){
    var query = new z.common.EntityQuery();
    query.owner = this._worldActor.guid;
    var characters = this._entityRepository.choose(startingNumberOfCharacters, query);
    goog.array.forEach(characters, function(character){
      character.update(null, null, actor);
    })
  }, this);
};

/**
 * @private
 */
z.service.world.World.prototype.endTurn = function () {
  console.log('World.endTurn begins');
  this._logger.info('World.endTurn begins');
  if(!this._turn){
    this._doBeforeFirstTurn();
  }
  var killed = this.tick();
  for (var actorGuid in this._playerActors) {
    if (this._playerActors.hasOwnProperty(actorGuid)) {
      var tiles = this._entityRepository.map(
        function (entity) {
          var tile = /** @type {!z.common.entities.Tile} */ entity;
          return z.common.data.TileData.fromEntity(tile);
        },
        function (entity) {
          return entity.meta.category === z.common.rulebook.category.TILE;
        }
      );
      var visibleProjects = this._entityRepository.map(
        function (item) {
          var project = /** @type {!z.common.entities.Project} */ item;
          return z.common.data.ProjectData.fromEntity(project);
        },
        function (entity) {
          if (entity instanceof z.common.entities.Project) {
            return true;
          }
          return false;
        });

      var entities = [];
      goog.array.extend(entities, tiles, visibleProjects);
      entities.push(z.common.data.ActorData.fromEntity(this._playerActors[actorGuid]));
      /**
       * @type {!z.common.data.StartTurnData}
       */
      var startTurn = new z.common.data.StartTurnData(actorGuid, entities, killed, this._turn);
      this._actorCallbacks[actorGuid](startTurn);
    }
  }
  this._logger.info('World.endTurn ends');
  console.log('World.endTurn ends');
};

z.service.world.World.prototype.tick = function () {
  var killed = this._setEntityState();
  this._expandWorld();
  //Calculate zombies
  //Zombie attack
  this._advanceProjects();
  this._turn += 1;
  //Special events

  return killed;
};

/**
 * @returns {Array.<!mugd.utils.guid>}
 * @private
 */
z.service.world.World.prototype._setEntityState = function () {
  var killed = [];
  this._entityRepository.map(
    function (entity) {
      if (entity.state === z.common.protocol.state.MODIFIED) {
        entity.setState(z.common.protocol.state.PASS);
      } else if (entity.state === z.common.protocol.state.KILL) {
        entity.setState(z.common.protocol.state.DEAD);
        killed.push(entity.guid);
      }
    });
  return killed;
};

/**
 * @private
 */
z.service.world.World.prototype._advanceProjects = function () {

  /**
   * @type {!Array.<!z.common.entities.Project>}
   */
  var projects = this._entityRepository.filter(function (entity) {
    if (entity instanceof z.common.entities.Project && entity.getState() !== z.common.protocol.state.DEAD) {
      return true;
    }
    return false
  });

  projects.sort(function (lhs, rhs) {
    return lhs.priority - rhs.priority;
  });

  var results = {};

  goog.array.forEach(projects, function (project) {
    /**
     * @type {!z.common.entities.Actor}
     */
    var owner = project.owner;
    var stockpile = owner.stockpile;
    var cost = project.getRemainingCost();
    var cashier = new z.common.Cashier(stockpile);
    var investment = cashier.withdraw(cost);
    var effects = project.advance(investment);
    results[project.guid] = this._applyEffects(effects, project);
  }, this);

  return results;
};

/**
 * @param {Array.<z.common.rulebook.effect>} effects
 * @param {z.common.entities.Project} project
 * @returns {Array.<z.common.rulebook.result>}
 * @private
 */
z.service.world.World.prototype._applyEffects = function (effects, project) {
  var results = goog.array.map(
    effects,
    function (effect) {
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
z.service.world.World.prototype['_apply_effect_stockpile'] = function (effect, project) {
  var owner = project.owner;
  goog.array.forEach(effect, function (resource) {
    owner.stockpile.add(resource['type'], resource['magnitude']);
  }, this);
};

/**
 * @param {z.common.rulebook.effect_terrain} effect
 * @param {z.common.entities.Project} project
 */
z.service.world.World.prototype['_apply_effect_terrain'] = function (effect, project) {
  var tile = project.tile;
  var tileData = z.common.data.TileData.fromEntity(tile);
  var effectMeta = this._rulebook.getMetaClass(effect);
  tileData.terrain = /** @type {z.common.terrain} */ goog.object.unsafeClone(tileData.terrain);
  tileData.terrain[effectMeta.zone] = effect;
  this._entityRepository.put(tileData);
};

/**
 * @private
 */
z.service.world.World.prototype._expandWorld = function () {
  var x_min = -10;
  var x_max = 10;
  var y_min = -10;
  var y_max = 10;
  this._entityRepository.map(
    function (entity) {
      var range = z.service.world.World.actionRange(entity);
      x_min = Math.min(x_min, entity.position.x - range);
      x_max = Math.max(x_max, entity.position.x + range);
      y_min = Math.min(y_min, entity.position.y - range);
      y_max = Math.max(y_max, entity.position.y + range);
    },
    function (entity) {
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
z.service.world.World.actionRange = function (entity) {
  if (entity.vision) {
    return entity.vision + 5;
  }
  return 0;
};
