goog.provide('z.service.world.RandomTerrainGenerator');

goog.require('z.service.world.ITerrainGenerator');

/**
 * @param {string} seed
 * @constructor
 * @implements {z.service.world.ITerrainGenerator}
 */
z.service.world.RandomTerrainGenerator = function(seed){
  /**
   * @type {string}
   * @private
   */
  this._seed = seed;
};

/**
 * @inheritDoc
 */
z.service.world.RandomTerrainGenerator.prototype.generateTerrain = function () {
//  var noise = new mugd.utils.SimplexNoise();
//  var scale = .1;
//  var top = -10;
//  var right = 11;
//  var bottom = 11;
//  var left = -10;
//  var waterLevel = -.2;
//  var hillLevel = .6;
//
//  for (var y = top; y < bottom; y++) {
//    for (var x = left; x < right; x++) {
//      var height = noise.noise(x * scale, y * scale);
//      if (height < waterLevel) {
//        this.tiles.push(this._entityFactory.createTile('water', x, y));
//      } else if (height > hillLevel) {
//        this.tiles.push(this._entityFactory.createTile('hill', x, y));
//      } else {
//        this.tiles.push(this._entityFactory.createTile('grass', x, y));
//      }
//    }
//  }
};