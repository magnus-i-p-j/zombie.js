goog.provide('z.client.facet.MapFacet');

goog.require('goog.array');
goog.require('goog.math.Rect');

goog.require('z.client.facet.Facet');
goog.require('z.client.facet.TileFacet');

goog.require('mugd.Injector');
goog.require('mugd.utils.Grid')
goog.require('z.client');

z.client.facet.MapFacet = function (tileFacetFactory) {
  goog.base(this);
  this._grid = new mugd.utils.Grid();
  this._tileFacetFactory = tileFacetFactory;
  this.visibleTiles = ko.observableArray();
  this.offsetX = ko.observable(-10 * 72);
  this.offsetY = ko.observable(-10 * (72 - 18));
};

goog.inherits(z.client.facet.MapFacet, z.client.facet.Facet);

z.client.facet.MapFacet.prototype[mugd.Injector.DEPS] = [
  //z.client.Resources.TILE_FACET_FACTORY
];

/**
 * @param {!z.client.facet.Gem} parent
 */
z.client.facet.MapFacet.prototype.setParentEventTarget = function (parent) {
  goog.base(this, 'setParentEventTarget', parent);
  // TODO: listen for map updated events
};

/**
 * @param {!goog.math.Rect } boundingbox
 */
z.client.facet.MapFacet.prototype.setBoundingBox = function (boundingbox) {
  this.visibleTiles.removeAll();
  for (var y = boundingbox.bottom; y <= boundingbox.top; y++) {
    for (var x = boundingbox.left; x <= boundingbox.right; x++) {
      this.visibleTiles.push(this._grid[x][y]);
    }
  }
};

z.client.facet.MapFacet.prototype.computeScreenPositionX = function (tileFacet) {
  var width = 72;
  var screenX = tileFacet.x * width - this.offsetX();
  var offset = tileFacet.y % 2 ? 0 : width / 2;
  return (screenX + offset) + 'px';
};

z.client.facet.MapFacet.prototype.computeScreenPositionY = function (tileFacet) {
  var height = 72;
  var cut = -18;
  var screenY = tileFacet.y * ( height + cut ) - this.offsetY();
  return screenY + 'px';
};

z.client.facet.MapFacet.prototype.getTileFacet = function (x, y) {
  return goog.array.find(this.visibleTiles(), function (element) {
    return element.x === x && element.y === y;
  });
};

z.client.facet.MapFacet.prototype.getTileFacet = function (x, y) {
  var tile = this._grid.getNode(x, y);
  if (!tile) {
    tile = this.getPlaceholderTileFacet(x, y);
  }
  return tile;
};

z.client.facet.MapFacet.prototype.getAdjacent = function (x, y) {
  return this._grid.getAdjacent(x, y);
};

z.client.facet.MapFacet.prototype.getPlaceholderTileFacet = function (x, y) {
  return {
    terrain:'unknown',
    x:x,
    y:y
  };
};

