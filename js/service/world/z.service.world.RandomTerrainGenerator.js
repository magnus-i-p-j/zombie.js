goog.provide('z.service.world.RandomTerrainGenerator');

goog.require('mugd.injector.Injector');
goog.require('z.service');
goog.require('z.service.world.ITerrainGenerator');
goog.require('z.common.data.TileData');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements {z.service.world.ITerrainGenerator}
 * @implements {mugd.injector.IInjectable}
 */
z.service.world.RandomTerrainGenerator = function (services) {
  /**
   * @type {string}
   * @private
   */
  this._seed = /** @type {string} */ services.get(z.service.Resources.TERRAIN_SEED);

  /**
   * @type {mugd.utils.SimplexNoise}
   * @private
   */
  this._noise = new mugd.utils.SimplexNoise();
};

/**
 * @inheritDoc
 */
z.service.world.RandomTerrainGenerator.prototype.generateTerrain = function (x, y) {
  var scale = .1;
  var waterLevel = -.2;
  var hillLevel = .6;

  var height = this._noise.noise(x * scale, y * scale);
  var terrain;
  if (height < waterLevel) {
    terrain = 'water';
  } else if (height > hillLevel) {
    terrain = 'hills';
  } else {
    terrain = 'grass';
  }

  var data = new z.common.data.TileData(null, null, x, y, terrain);
  return data;
};