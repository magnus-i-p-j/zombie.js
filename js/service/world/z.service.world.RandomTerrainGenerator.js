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
  var base;
  var content;
  if (height < waterLevel) {
    base = 'water';
  } else if (height > hillLevel) {
    base = 'hills';
  } else {
    base = 'grass';
    if(Math.random() <=0.2){
      content = 'house'
    }
  }

  var data = new z.common.data.TileData(null, null, x, y, {'base': base, 'content': content}, 'tile');
  return data;
};