goog.provide('z.facet.MapFacet');

goog.require('z.facet.TileFacet');
goog.require('z.util.Rectangle');
goog.require('goog.array');

/**
 * @param {!z.util.EventRouter} evr
 * @param {!z.client.Map} map
 * @param {z.util.Rectangle} boundingBox
 */
z.facet.MapFacet = function (evr, map, boundingBox) {
  this.evr = evr;
  this.map = map;
  this.visibleTiles = ko.observableArray();
  this.offsetX = ko.observable(-10 * 72);
  this.offsetY = ko.observable(-10 * (72 - 18));
  boundingBox = boundingBox || new z.util.Rectangle(10, 10, -10, -10);
  this.setBoundingBox(boundingBox);
};

z.facet.MapFacet.prototype.setBoundingBox = function (boundingbox) {
  this.visibleTiles.removeAll();
  for (var y = boundingbox.bottom; y <= boundingbox.top; y++) {
    for (var x = boundingbox.left; x <= boundingbox.right; x++) {
      this.visibleTiles.push(new z.facet.TileFacet(this.map, this.evr, x, y));
    }
  }
};

z.facet.MapFacet.prototype.computeScreenPositionX = function (tileFacet) {
  var width = 72;
  var screenX = tileFacet.x * width - this.offsetX();
  var offset = tileFacet.y % 2 ? 0 : width / 2;
  return (screenX + offset) + 'px';
};

z.facet.MapFacet.prototype.computeScreenPositionY = function (tileFacet) {
  var height = 72;
  var cut = -18;
  var screenY = tileFacet.y * ( height + cut ) - this.offsetY();
  return screenY + 'px';
};

z.facet.MapFacet.prototype.getAdjacent = function (x, y) {
  return this.map.getAdjacent(x, y);
};

z.facet.MapFacet.prototype.getTileFacet = function (x, y) {
  return goog.array.find(this.visibleTiles(), function (element) {
    return element.x === x && element.y === y;
  });
};