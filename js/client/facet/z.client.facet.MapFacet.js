goog.provide('z.client.facet.MapFacet');

goog.require('z.client.facet.TileFacet');
goog.require('goog.array');

z.client.facet.MapFacet = function (gem) {
  this._grid = new mugd.utils.Grid();
  this._gem = gem;
  this.visibleTiles = ko.observableArray();
  this.offsetX = ko.observable(-10 * 72);
  this.offsetY = ko.observable(-10 * (72 - 18));
};

z.client.facet.MapFacet.prototype.setBoundingBox = function (boundingbox) {
  this.visibleTiles.removeAll();
  for (var y = boundingbox.bottom; y <= boundingbox.top; y++) {
    for (var x = boundingbox.left; x <= boundingbox.right; x++) {
      this.visibleTiles.push(new z.client.facet.TileFacet(this._gem, x, y));
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

z.client.facet.MapFacet.prototype.getAdjacent = function (x, y) {
  return this.map.getAdjacent(x, y);
};

z.client.facet.MapFacet.prototype.getTileFacet = function (x, y) {
  return goog.array.find(this.visibleTiles(), function (element) {
    return element.x === x && element.y === y;
  });
};

z.client.Map.prototype.getTileFacet = function (x, y) {
  var tile = this.grid.getNode(x, y);
  if (!tile) {
    tile = this.getPlaceholderTileFacet(x, y);
  }
  return tile;
};

z.client.Map.prototype.getAdjacent = function (x, y) {
  return this.grid.getAdjacent(x, y);
};

z.client.Map.prototype.getPlaceholderTileFacet = function (x, y) {
  return {
    terrain:'unknown',
    x:x,
    y:y
  };
};

