goog.provide('z.service.world.World');

goog.require('z.common.EntityFactory');
goog.require('z.common.entities.Actor');
goog.require('goog.array');
goog.require('mugd.utils.SimplexNoise');
goog.require('mugd.utils');
goog.require('z.common.protocol');

/**
 * @param {!Object} ruleset
 * @param {!z.service.world.ITerrainGenerator} terrainGenerator
 * @constructor
 */
z.service.world.World = function (ruleset, terrainGenerator) {
  this._rulebook = new z.common.rulebook.Rulebook(ruleset);
  this._terrainGenerator = terrainGenerator;
  this._entityFactory = new z.common.EntityFactory(this._rulebook);

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
  this._actors = {};

  /**
   * @type {Object.<!mugd.utils.guid, function(z.common.protocol.startTurn)>}
   * @private
   */
  this._actorCallbacks = {};
};

/**
 * @param {function(!z.common.protocol.startTurn)} actorCallback
 * @return {mugd.utils.guid}
 */
z.service.world.World.prototype.createActor = function (actorCallback) {
  var actor = this._entityFactory.createActor();
  this._actors[actor.guid] = actor;
  this._actorCallbacks[actor.guid] = actorCallback;
  return actor.guid;
};

z.service.world.World.prototype.endTurn = function () {
  this.tick();
  for (var actorGuid in this._actors) {
    if (this._actors.hasOwnProperty(actorGuid)) {
      var tiles = [];
      /**
       * @type {z.common.protocol.startTurn}
       */
      var startTurn = {'actorId':actorGuid, 'tiles':tiles, 'turn':this._turn + 1 };
      for (var y = -2; y <= 2; y++) {
        for (var x = -2; x <= 2; x++) {
          var tile = this._tiles.getNode(x, y);
          tiles.push(goog.json.serialize(tile));
        }
      }
      this._actorCallbacks[actorGuid](startTurn);
    }
  }
};

z.service.world.World.prototype.tick = function () {

  //TODO: Ensure all actors are done.
  this._expandWorld();
  //Calculate zombies
  //Zombie attack
  //Advance Projects
  this._turn += 1;
  //Special events
};

/**
 * @private
 */
z.service.world.World.prototype._expandWorld = function () {
  var x_min = 0;
  var x_max = 0;
  var y_min = 0;
  var y_max = 0;
  this._entityFactory.forEntities(
      function (entity) {
        if (!goog.isNull(entity.position)) {
          var range = z.service.world.World.actionRange(entity);
          x_min = Math.min(x_min, entity.position.x - range);
          x_max = Math.max(x_max, entity.position.x + range);
          y_min = Math.min(y_min, entity.position.y - range);
          y_max = Math.max(y_max, entity.position.y + range);
        }
      }
      , this);

  for (var y = y_min; y <= y_max; y++) {
    for (var x = x_min; x <= x_max; x++) {
      if (!goog.isDef(this._tiles.getNode(x, y))) {
        this._tiles.setNode(x, y, this._terrainGenerator.generateTerrain(x, y));
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


