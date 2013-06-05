goog.provide('z.service.world.RandomTerrainGenerator');

goog.require('mugd.injector.Injector');
goog.require('z.service');
goog.require('z.service.world.ITerrainGenerator');
goog.require('z.common.EntityRepository');
goog.require('z.common.data.TileData');


/**
 * @param {string} seed
 * @param {z.common.EntityRepository} entityRepository
 * @constructor
 * @implements {z.service.world.ITerrainGenerator}
 */
z.service.world.RandomTerrainGenerator = function (seed, entityRepository) {
  /**
   * @type {string}
   * @private
   */
  this._seed = seed;
  /**
   * @type {z.common.EntityRepository}
   * @private
   */
  this._entityRepository = entityRepository;
  /**
   * @type {mugd.utils.SimplexNoise}
   * @private
   */
  this._noise = new mugd.utils.SimplexNoise();
};


z.service.world.RandomTerrainGenerator.prototype[mugd.injector.Injector.DEPS] = [
  z.service.Resources.TERRAIN_SEED,
  z.service.Resources.REPOSITORY
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
    terrain = 'hills';
  } else {
    terrain = 'grass';
  }

  var data = new z.common.data.TileData(null, x, y, terrain);
  return /** @type {!z.common.entities.Tile} */ this._entityRepository.put(data);
};