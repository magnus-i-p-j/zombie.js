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

  this._baseOverlays = {
    solitary: {},
    tail: {},
    head: {},
    body: {

    }
  };

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

  var overlaps = this._getOverlaps(query);
  var overlays = goog.array.map(overlaps, function (overlap) {
    return this._getOverlay(query[overlap[0]], overlap);
  });

  this._cache[query.hashCode()] = overlay;
  return overlay;
};

z.service.mapRender.BasicTerrainOverlayStrategy.prototype._getOverlay = function (terrain, directions) {
  var overlays = [];
  if (directions === 1) {
    overlays.push(this._baseOverlays.solitary[terrain]);
  } else {
    overlays.push(this._baseOverlays.tail);

  }
}

/**
 * @param {z.service.mapRender.TerrainOverlayQuery} query
 * @param {Array.<Array<z.service.Directions>>} directions
 * @private
 */
z.service.mapRender.BasicTerrainOverlayStrategy.prototype._getOverlaps = function (query) {
  var overlaps = [];
  goog.array.forEach(this._directions, function (direction) {
    if (this._isOverlappingCenter(query, direction)) {
      var lastOverlap = goog.array.peek(overlaps);
      if (goog.isDefAndNotNull(lastOverlap) &&
          this._inSequence(goog.array.peek(lastOverlap), direction) &&
          query[goog.array.peek(lastOverlap)] === query[direction]) {
        lastOverlap.push(direction);
      }
      else {
        overlaps.push([direction]);
      }
    }
  }, this);

  if (overlaps.length > 1) {
    var firstOverlap = overlaps[0];
    var lastOverlap = goog.array.peek(overlaps);
    if (query[firstOverlap[0]] === query[goog.array.peek(lastOverlap)] &&
        this._inSequence(firstOverlap[0], goog.array.peek(lastOverlap))) {
      goog.array.removeAt(overlaps, 0);
      goog.array.extend(lastOverlap, firstOverlap);
    }
  }

  return overlaps;
};

z.service.mapRender.BasicTerrainOverlayStrategy.prototype._isOverlappingCenter = function (query, direction) {
  return this._terrains[query[direction]] >
      this._terrains[query[z.service.Directions.CENTER_TERRAIN]];
};

z.service.mapRender.BasicTerrainOverlayStrategy.prototype._inSequence = function (lhsDirection, rhsDirection) {
  return Math.abs(this._directions.indexOf(lhsDirection) - this._directions.indexOf(rhsDirection)) === 1 ||
      this._directions.indexOf(lhsDirection) === 0 && this._directions.indexOf(rhsDirection) === this._directions.length - 1;
};



