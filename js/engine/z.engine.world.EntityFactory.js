goog.provide('z.engine.world.EntityFactory');

goog.require('z.entities.Tile');
goog.require('z.util');
/**
 * @param {!z.rulebook.Rulebook} rulebook
 */
z.engine.world.EntityFactory = function (rulebook) {
  this.rulebook = rulebook;
};

z.engine.world.EntityFactory.prototype.createActor = function () {
};

z.engine.world.EntityFactory.prototype.createTile = function (terrain, x, y) {
  var meta = this.rulebook.getMeta(terrain);

  return new z.entities.Tile(z.util.getGuid(), meta, x, y);
};
