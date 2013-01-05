goog.provide('z.common.entities.Tile');
goog.require('z.common.entities.Entity');
goog.require('goog.math.Coordinate');

/**
 * @param {!mugd.utils.guid} guid
 * @param {!z.common.rulebook.meta} meta
 * @param {number} x
 * @param {number} y
 * @param {string} terrain
 * @extends {z.common.entities.Entity}
 * @constructor
 */
z.common.entities.Tile = function (guid, meta, x, y, terrain) {
  goog.base(this, guid, meta);
  if (!z.common.entities.Tile.isCssRegex.test(terrain)) {
    throw { name:'Not a css class' };
  }
  this.terrain = terrain;
  this.position = new goog.math.Coordinate(x, y);
};
goog.inherits(z.common.entities.Tile, z.common.entities.Entity);

z.common.entities.Tile.isCssRegex = /^[_a-zA-Z]+[_a-zA-Z0-9-]*$/;

/**
 * @return {!z.common.protocol.tile}
 */
z.common.entities.Tile.prototype.toJSON = function () {
  return {
    'tileId':this.guid,
    'x':this.position.x,
    'y':this.position.y,
    'type':this.meta.type
  };
};

/**
 * @param {!z.common.protocol.tile} data
 * @param {!z.common.rulebook.meta} meta
 */
z.common.entities.Tile.prototype.fromJSON = function (data, meta) {
  return {
    'tileId':this.guid,
    'x':this.position.x,
    'y':this.position.y,
    'type':this.meta.type
  };
};
