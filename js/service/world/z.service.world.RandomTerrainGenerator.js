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

  var terrain = {};
  var height = this._noise.noise(x * scale, y * scale);
  if (height < waterLevel) {
    terrain['base'] = 'water';
  } else if (height > hillLevel) {
    terrain['base'] = 'hills';
  } else {
    terrain['base'] = 'grass';
    if (Math.random() <= 0.2) {
      terrain['content'] = 'house';
    }
  }

  var data = new z.common.data.TileData(null, z.common.protocol.state.MODIFIED, null, x, y, terrain, 'tile', this.newEmptyZombieData());
  return data;
};

/**
 * @returns {z.common.zombiedata}
 */
z.service.world.RandomTerrainGenerator.prototype.newEmptyZombieData = function() {
  return {
    density: 10,
    defence: 0,
    attraction: 0,
    activity: 0,
    danger: 0
  };
};