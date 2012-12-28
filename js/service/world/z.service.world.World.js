goog.provide('z.service.World');

goog.require('z.common.EntityFactory');
goog.require('z.common.entities.Actor');
goog.require('goog.array');
goog.require('mugd.utils.SimplexNoise');

/**
 * @param {!Object} ruleset
 * @param {!z.service.world.ITerrainGenerator}
 * @constructor
 */
z.service.World = function (ruleset, terrainGenerator) {
  this._rulebook = new z.common.rulebook.Rulebook(ruleset);
  this._terrainGenerator = terrainGenerator;
  this._entityFactory = new z.common.EntityFactory(this._rulebook);

  /**
   * @type {mugd.utils.Grid}
   * @private
   */
  this._tiles = [];
  this._actors = [];

};

z.service.World.prototype.createActor = function (callback) {
  var actor = this._entityFactory.createActor();
  this._actors.push(actor);
  return actor.guid;
};

z.service.World.prototype.endTurn = function () {
  this.tick();
};

z.service.World.prototype.tick = function () {
  //Ensure all actors are done.
  if (!goog.array.every(this._actors, function (actor) {

  })) {
    throw 'Not all actors are done!';
  }

  this._expandWorld();
  //Calculate zombies
  //Discover tiles
  //Zombie attack
  //Advance Projects
  //Special events
};

/**
 * @private
 */
z.service.World.prototype._expandWorld = function () {
  var x_min = 0;
  var x_max = 0;
  var y_min = 0;
  var y_max = 0;
  this._entityFactory.forEntities(
      function (entity) {
        if(!goog.isNull(entity.position)){
          var range = z.service.World.actionRange(entity);
          x_min = Math.min(x_min, entity.position.x - range);
          x_max = Math.max(x_max, entity.position.x + range);
          y_min = Math.min(y_min, entity.position.y - range);
          y_max = Math.max(y_max, entity.position.y + range);
        }
      }
  , this);

  for (var y = y_min; y <= y_max; y++) {
    for (var x = x_min; x <= x_max; x++) {
      if(!goog.isDef(this._tiles.getNode(x,y))){
        this._tiles.setNode(x, y, this._terrainGenerator.generateTerrain(x, y));
      }
    }
  }

};

/**
 * @param {!z.common.entities.Entity} entity
 * @return number
 */
z.service.World.actionRange = function(entity){
  if(entity.vision){
    return entity.vision + 5;
  }
  return 0;
};


