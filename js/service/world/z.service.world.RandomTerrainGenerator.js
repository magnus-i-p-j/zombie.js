goog.provide('z.service.world.RandomTerrainGenerator');

goog.require('mugd.Injector');
goog.require('z.service');
goog.require('z.service.world.ITerrainGenerator');

/**
 * @param {string} seed
 * @constructor
 * @implements {z.service.world.ITerrainGenerator}
 */
z.service.world.RandomTerrainGenerator = function (seed) {
  // TODO: generate Tiles
  /**
   * @type {string}
   * @private
   */
  this._seed = seed;
  /**
   * @type {mugd.utils.SimplexNoise}
   * @private
   */
  this._noise = new mugd.utils.SimplexNoise();
};


z.service.world.RandomTerrainGenerator.prototype[mugd.Injector.DEPS] = [
  z.service.Resources.TERRAIN_SEED
];

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
    terrain = 'hill';
  } else {
    terrain = 'grass';
  }
  return terrain;
};