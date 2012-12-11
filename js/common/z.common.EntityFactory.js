goog.provide('z.common.EntityFactory');

goog.require('z.common.entities.Tile');
goog.require('z.util');
goog.require('z.common.rulebook.Rulebook');

/**
 * @param {!z.common.rulebook.Rulebook} rulebook
 */
z.common.EntityFactory = function (rulebook) {
  this._rulebook = rulebook;
};

z.common.EntityFactory.prototype.createActor = function () {
};

z.common.EntityFactory.prototype.createTile = function (terrain, x, y) {
  var meta = this._rulebook.getMetaClass(terrain);

  return new z.common.entities.Tile(mugd.utils.getGuid(), meta, x, y);
};
