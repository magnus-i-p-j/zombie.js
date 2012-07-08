goog.provide('z.facet.MapFacet');

goog.require('z.facet.TileFacet');
goog.require('z.util.Rectangle');

z.facet.MapFacet = function (evr, map, boundingbox) {
  this.evr = evr;
  this.map = map;
  this.visibleTiles = ko.observableArray();
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
