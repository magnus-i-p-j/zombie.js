goog.provide('z.common.EntityFactory');

goog.require('z.common.entities.Tile');
goog.require('mugd.utils');
goog.require('z.common.rulebook.Rulebook');

/**
 * @param {!z.common.rulebook.Rulebook} rulebook
 * @constructor
 */
z.common.EntityFactory = function (rulebook) {
  goog.base(this);
  this._rulebook = rulebook;
};

/**
 * @return {!z.common.entities.Actor}
 */
z.common.EntityFactory.prototype.createActor = function () {
};

/**
 * @param {!z.common.protocol.tile} data
 * @return {!z.common.entities.Tile}
 */

z.common.EntityFactory.prototype.createTile = function(data){
  var terrain = data['terrain'];
  var meta = this._rulebook.getMetaClass(terrain);
  var tile = new z.common.entities.Tile(mugd.utils.getGuid(), meta, data['x'], data['y'], terrain);
  return tile;
};



