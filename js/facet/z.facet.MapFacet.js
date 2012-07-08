goog.provide('z.facet.MapFacet');

goog.require('z.facet.TileFacet');
goog.require('z.util.Rectangle');

z.facet.MapFacet = function (evr, map, boundingbox) {
  this.evr = evr;
  this.map = map;
  this.visibleTiles = ko.observableArray();
  this.offsetX = ko.observable(0);
  this.offsetY = ko.observable(0);
  boundingbox = boundingbox || new z.util.Rectangle(10, 10, -10, -10);
  this.setBoundingBox(boundingbox);
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
