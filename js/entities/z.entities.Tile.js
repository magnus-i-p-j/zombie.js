goog.provide('z.entities.Tile');
goog.require('z.entities.Entity');

/**
 * @param {!z.utils.guid} guid
 * @param {!z.rulebook.meta} meta
 * @param {int} x
 * @param {int} y
 * @param {string} terrain
 */
z.entities.Tile = function (guid, meta, x, y, terrain) {
  goog.base(this, guid, meta);
  if (!z.entities.Tile.isCssRegex.test(terrain)) {
    throw { name:'Not a css class' };
  }
  this.terrain = terrain;
  this.x = x;
  this.y = y;
};
goog.inherits(z.entities.Tile, z.entities.Entity);

z.entities.Tile.isCssRegex = /^[_a-zA-Z]+[_a-zA-Z0-9-]*$/;


