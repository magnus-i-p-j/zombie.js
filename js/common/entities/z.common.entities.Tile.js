goog.provide('z.common.entities.Tile');
goog.require('z.common.entities.Entity');
goog.require('goog.math.Coordinate');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.common.entities.Entity}
 * @constructor
 */
z.common.entities.Tile = function (services) {
  goog.base(this, services);
  /**
   * @type {!z.common.data.TileData}
   */
  var tileData = /** @type {!z.common.data.TileData} */ services.get('entityData');
  var terrain = tileData.type;
  if (!z.common.entities.Tile.isCssRegex.test(terrain)) {
    throw { 'name': 'Not a css class' };
  }
  this.terrain = terrain;
  this.position = new goog.math.Coordinate(tileData.x, tileData.y);
};
goog.inherits(z.common.entities.Tile, z.common.entities.Entity);

z.common.entities.Tile.isCssRegex = /^[_a-zA-Z]+[_a-zA-Z0-9-]*$/;

/**
 * @inheritDoc
 */
z.common.entities.Tile.prototype.update = function (data, meta) {
  if (!(data instanceof z.common.data.TileData)) {
    throw {'name': 'InvalidDataException', 'message': 'not a z.common.data.TileData'};
  }

  /**
   * @type {!z.common.data.TileData}
   */
  var tileData = /** @type {!z.common.data.TileData} */ data;
  if (this.position.x !== tileData.x || this.position.y !== tileData.y || this.guid !== tileData.guid) {
    throw {
      'name': 'InvalidDataException',
      'message': 'Incorrect update data, not correct tile',
      'real x': this.position.x,
      'real y': this.position.y,
      'bad x': tileData.x,
      'bad y': tileData.y,
      'tileData': tileData,
      'guid': this.guid,
      'tileId': tileData.guid
    };
  }

  /**
   * @type {boolean}
   */
  var updated = this.terrain != tileData.type || this.meta.type == meta.type;

  this.terrain = tileData.type;
  this.meta = meta;

  return updated;
};
