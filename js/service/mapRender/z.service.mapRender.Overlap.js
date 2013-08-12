goog.provide('z.service.mapRender.Overlap');

goog.require('goog.array');
goog.require('goog.object');

/**
 * @param {string} terrain
 * @constructor
 */
z.service.mapRender.Overlap = function (terrain) {
  this.terrain = terrain;
  this.directions = [];
};

z.service.mapRender.Overlap.prototype.TryMerge = function (other) {
  var merged = false;

  if (this.terrain === other.terrain &&
      this._adjacent(goog.array.peek(this.directions),other.directions[0]) ||
      this._adjacent(this.directions[0],goog.array.peek(other.directions))) {
    goog.array.extend(this.directions, other.directions);
    merged = true;
  }
  return merged;
};

z.service.mapRender.Overlap.prototype._adjacent = function(lhs, rhs){
  var allDirections = goog.object.getValues(z.service.Directions);
  var i = goog.array.indexOf(allDirections, lhs);
  var j = goog.array.indexOf(allDirections, rhs);
  var d = Math.abs(i - j);
  return d === 1 || d === allDirections.length;
};

z.service.mapRender.Overlap.prototype.Merge = function (other) {
  goog.array.extend(this.directions, other.directions);
};
