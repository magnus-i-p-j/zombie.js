goog.provide('z.service.world.World');

goog.require('mugd.injector.Injector');
goog.require('z.service');

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
  this._rulebook = /** @type {!z.common.rulebook.Rulebook} */ services.get(z.common.Resources.RULESET);
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
  var worldActorData = new z.common.data.ActorData(null, 'actor_world');
  /**
   * @type {!z.common.entities.Actor}
   * @private
   */
  this._worldActor = /** @type {!z.common.entities.Actor} */ this._entityRepository.put(worldActorData);

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
 * @param {function(!z.common.data.StartTurnData)} actorCallback
 * @return {!z.common.data.ActorData}
 */
z.service.world.World.prototype.createPlayerActor = function (actorCallback) {
  var actorData = new z.common.data.ActorData(null, 'actor_player');
  var actor = /** @type {!z.common.entities.Actor} */ this._entityRepository.put(actorData);
  this._playerActors[actor.guid] = actor;
  this._actorCallbacks[actor.guid] = actorCallback;
  return  z.common.data.ActorData.fromEntity(actor);
};

/**
 * @param {z.common.data.ClientEndTurn} endTurnData
 */
z.service.world.World.prototype.actorEndTurn = function (endTurnData) {
  console.log(endTurnData);
  // TODO: store plan
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

/**
 * @private
 */
z.service.world.World.prototype.endTurn = function () {
  this.tick();
  for (var actorGuid in this._playerActors) {
    if (this._playerActors.hasOwnProperty(actorGuid)) {
      var tiles = this._entityRepository.map(
          function (entity) {
            var tile = /** @type {!z.common.entities.Tile} */ entity;
            return z.common.data.TileData.fromEntity(tile);
          },
          function (entity) {
            return entity.meta.category === z.common.rulebook.category.TERRAIN;
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

      /**
       * @type {!z.common.data.StartTurnData}
       */
      var startTurn = new z.common.data.StartTurnData(actorGuid, tiles, this._turn, visibleProjects);
      this._actorCallbacks[actorGuid](startTurn);
    }
  }
};

z.service.world.World.prototype.tick = function () {
  this._expandWorld();
  //Calculate zombies
  //Zombie attack
  this._advanceProjects();
  this._turn += 1;
  //Special events
};

/**
 * @private
 */
z.service.world.World.prototype._advanceProjects = function () {
  // for each project
  //   get project price
  //   calculate use
  //   send use to project
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

