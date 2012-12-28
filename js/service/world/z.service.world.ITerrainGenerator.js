goog.provide('z.service.world.ITerrainGenerator');

/**
 * @param {string} seed
 * @interface
 */
z.service.world.ITerrainGenerator = function(seed){
};

/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
z.service.world.ITerrainGenerator.prototype.generateTerrain = function(x, y){ };