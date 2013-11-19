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
 * @param {string} terrain
 */
IsogenicMap.prototype.drawTile = function (x, y, terrain) {};

/**
 * @param {function(mapEvent)} callback
 */
IsogenicMap.prototype.onTileFocused = function(callback) {};

/**
 * @param {function(mapEvent)} callback
 */
IsogenicMap.prototype.onTileContext = function(callback) {};