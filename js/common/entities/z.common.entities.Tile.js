goog.provide('z.common.entities.Tile');
goog.require('z.common.entities.Entity');

/**
 * @param {!z.utils.guid} guid
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
  this.x = x;
  this.y = y;
};
goog.inherits(z.common.entities.Tile, z.common.entities.Entity);

z.common.entities.Tile.isCssRegex = /^[_a-zA-Z]+[_a-zA-Z0-9-]*$/;


