goog.provide('z.engine.world.EntityFactory');
goog.require('z.entities.Tile');

z.engine.world.EntityFactory = function (world) {
  this.world = world;
};

z.engine.world.EntityFactory.prototype.createActor = function () {
};

z.engine.world.EntityFactory.prototype.createTile = function (x, y, terrain) {
  return new z.entities.Tile(z.util.getGuid(), x, y, terrain);
};