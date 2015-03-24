/**
 * @implements {IMap}
 * @constructor
 */
var IsogenicMap = function(){};

/**
 * @param {string} elementId
 */
IsogenicMap.prototype.claim = function (elementId) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {z.common.terrain} terrain
 * @param {Array.<z.common.terrain>} adjacent
 */
IsogenicMap.prototype.drawTile = function (x, y, terrain, adjacent) {};

/**
 * @param {function(mapEvent)} callback
 */
IsogenicMap.prototype.onTileFocused = function(callback) {};

/**
 * @param {function(mapEvent)} callback
 */
IsogenicMap.prototype.onTileContext = function(callback) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {Array.<string>} text
 */
IsogenicMap.prototype.drawText = function (x, y, text) {};