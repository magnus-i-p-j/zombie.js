goog.provide('z.engine.world.EntityFactory');

goog.require('z.entities.Tile');
goog.require('z.util');

z.engine.world.EntityFactory = function (world, rulebook) {
  this.world = world;

  this.Tile = function(guid, x, y, terrain){
    goog.base(this, guid, x, y, terrain);
  };
  goog.inherits(this.Tile, z.entities.Tile);
  this.Tile.prototype.actionSpecifications = [];

};

z.engine.world.EntityFactory.prototype.createActor = function () {
};

z.engine.world.EntityFactory.prototype.createTile = function (x, y, terrain) {
  var tile = new this.Tile(z.util.getGuid(), x, y, terrain);

  return tile;
};
