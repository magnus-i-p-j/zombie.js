goog.provide('z.service.mapRender.BasicTerrainOverlayStrategy');

goog.require('z.service.mapRender.ITerrainOverlayStrategy');

/**
 * @constructor
 * @param {Object.<string, number>} terrains
 * @private
 * @implements {z.service.mapRender.ITerrainOverlayStrategy}
 * TODO: Add some base overlays to the constructor
 */
z.service.mapRender.BasicTerrainOverlayStrategy = function (terrains) {
  this._terrains = terrains;
  this._directions = [z.service.Directions.NORTH_WEST_TERRAIN,
    z.service.Directions.NORTH_EAST_TERRAIN,
    z.service.Directions.EAST_TERRAIN,
    z.service.Directions.SOUTH_EAST_TERRAIN,
    z.service.Directions.SOUTH_WEST_TERRAIN,
    z.service.Directions.WEST_TERRAIN];

  /*this.baseOverlays = {
   solitary: {},
   corners: {
   left: {},
   right: {}
   },
   center: {}
   };*/

  this._cache = {};
};

/**
 * @param {z.service.mapRender.TerrainOverlayQuery} query
 * @return string
 */
z.service.mapRender.BasicTerrainOverlayStrategy.prototype.getOverlay = function (query) {
  if (goog.isDefAndNotNull(this._cache[query.hashCode()])) {
    return this._cache[query.hashCode()];
  }
  var overlay = null;



  this._cache[query.hashCode()] = overlay;
  return overlay;
};

/**
 * @param {string} center
 * @param {Array.<z.service.Directions>} directions
 * @private
 */
z.service.mapRender.BasicTerrainOverlayStrategy.prototype._getOverlaps = function (center, directions) {

};

/**
 * @param {!string} center
 * @param {z.service.Directions} directions
 * @return {?z.service.mapRender.BasicTerrainOverlayStrategy.overlap}
 * @private
 */
z.service.mapRender.BasicTerrainOverlayStrategy.prototype._nextOverlap = function (center, directions) {
  var direction = directions.pop();

};