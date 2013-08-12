goog.provide('z.service.mapRender.TerrainOverlayQuery');

/**
 * @param {string} queryString
 * @constructor
 */
z.service.mapRender.TerrainOverlayQuery = function (queryString) {
  this._queryString = queryString;
  this[z.service.Directions.CENTER_TERRAIN] = null;
  this[z.service.Directions.NORTH_WEST_TERRAIN] = null;
  this[z.service.Directions.NORTH_EAST_TERRAIN] = null;
  this[z.service.Directions.EAST_TERRAIN] = null;
  this[z.service.Directions.SOUTH_EAST_TERRAIN] = null;
  this[z.service.Directions.SOUTH_WEST_TERRAIN] = null;
  this[z.service.Directions.WEST_TERRAIN] = null;
  this[z.service.Directions.CENTER_TERRAIN] = null;
  this._parseQueryString(queryString);
};

/**
 * @param queryString
 * @private
 */
z.service.mapRender.TerrainOverlayQuery.prototype._parseQueryString = function (queryString) {
  queryString = queryString.slice(1);
  var keyValuePairs = queryString.split('&');

  keyValuePairs = goog.array.map(keyValuePairs, function (pair) {
    return pair.split('=');
  });

  goog.array.forEach(keyValuePairs, function (pair) {
    var key = pair[0];
    var value = pair[1];

    if (this.hasOwnProperty(key)) {
      this[key] = value;
    }
  }, this);

  if (!goog.object.every(this, goog.isDefAndNotNull)) {
    throw new z.service.exceptions.InvalidQueryStringException('Unparsable query string.', queryString);
  }

};

/**
 * @returns {string}
 */
z.service.mapRender.TerrainOverlayQuery.prototype.toString = function(){
  return this._queryString;
};

/**
 * @returns {string}
 */
z.service.mapRender.TerrainOverlayQuery.prototype.hashCode = function(){
  return this._queryString;
};


