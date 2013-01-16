goog.provide('z.common.entities.Tile');
goog.require('z.common.entities.Entity');
goog.require('goog.math.Coordinate');

/**
 * @param {!z.common.data.TileData} tileData
 * @param {!z.common.rulebook.meta} meta
 * @extends {z.common.entities.Entity}
 * @constructor
 */
z.common.entities.Tile = function (tileData, meta) {
  goog.base(this, tileData.tileId, meta);
  var terrain = tileData.type;
  if (!z.common.entities.Tile.isCssRegex.test(terrain)) {
    throw { name:'Not a css class' };
  }
  this.terrain = terrain;
  this.position = new goog.math.Coordinate(tileData.x, tileData.y);
};
goog.inherits(z.common.entities.Tile, z.common.entities.Entity);

z.common.entities.Tile.isCssRegex = /^[_a-zA-Z]+[_a-zA-Z0-9-]*$/;

/**
 * @param {!z.common.data.TileData} data
 * @param {!z.common.rulebook.meta} meta
 */
z.common.entities.Tile.prototype.update = function (data, meta) {
  if (this.position.x !== data.x || this.position.y !== data.y || this.guid !== data.tileId) {
    throw {
      'name':'Incorrect update data',
      'real x':this.position.x,
      'real y':this.position.y,
      'bad x':data.x,
      'bad y':data.y
    };
  }
  this.terrain = data.type;
  this.meta = meta;
};
