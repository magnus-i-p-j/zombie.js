goog.provide('z.service.mapRender.TerrainOverlayQuery');
goog.require('goog.object');
goog.require('goog.functions');
goog.require('z.service.mapRender.Overlap');

/**
 * @param {string} queryString
 * @param {!Object.<string, number>} terrains
 * @constructor
 */
z.service.mapRender.TerrainOverlayQuery = function (terrains, queryString) {
  this._queryString = queryString;
  this._terrains = terrains;
  goog.object.forEach(z.service.Directions, function (direction) {
    this[direction] = null;
  }, this);
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

z.service.mapRender.TerrainOverlayQuery.prototype.getOverlaps = function () {
  var directions = goog.object.getValues(z.service.Directions);
  goog.array.remove(directions, z.service.Directions.CENTER_TERRAIN);
  return this._getOverlaps(directions);
};

z.service.mapRender.TerrainOverlayQuery.prototype._getOverlaps = function (directions) {
  var overlaps = [];
  goog.array.forEach(directions, function (direction) {
    if (this._isOverlapping(direction)) {
      var overlap = new z.service.mapRender.Overlap(this[direction]);
      overlap.directions.push(direction);
      this._addOverlap(overlaps, overlap);
    }
  }, this);

  return overlaps;
};

/**
 * @param {Array.<!z.service.mapRender.Overlap>} overlaps
 * @param {!z.service.mapRender.Overlap} overlap
 * @private
 */
z.service.mapRender.TerrainOverlayQuery.prototype._addOverlap = function (overlaps, overlap) {
  var previous = goog.array.peek(overlaps);
  if (previous && previous.terrain === overlap.terrain) {
    previous.Merge(overlap);
  }
  else {
    overlaps.push(overlap);
  }
};

/**
 * @param {!string} direction
 * @returns {boolean}
 * @private
 */
z.service.mapRender.TerrainOverlayQuery.prototype._isOverlapping = function (direction) {
  return this._terrains[this[z.service.Directions.CENTER_TERRAIN]] < this._terrains[this[direction]];
};

/**
 * @returns {string}
 */
z.service.mapRender.TerrainOverlayQuery.prototype.toString = function () {
  return this._queryString;
};

/**
 * @returns {string}
 */
z.service.mapRender.TerrainOverlayQuery.prototype.hashCode = function () {
  return this._queryString;
};


