goog.provide('z.client.facet.MapFacet');

goog.require('goog.array');
goog.require('goog.math.Rect');

goog.require('z.client.facet.Facet');
goog.require('z.client.facet.TileFacet');

goog.require('mugd.Injector');
goog.require('mugd.utils.Grid');
goog.require('z.client');
goog.require('z.client.events');

z.client.facet.MapFacet = function () {
  goog.base(this);
  this._grid = new mugd.utils.Grid();
  this.visibleTiles = ko.observableArray();
  this.offsetX = ko.observable(-10 * 72);
  this.offsetY = ko.observable(-10 * (72 - 18));
};

goog.inherits(z.client.facet.MapFacet, z.client.facet.Facet);

z.client.facet.MapFacet.prototype[mugd.Injector.DEPS] = [];

/**
 * @param {!z.client.facet.Gem} parent
 */
z.client.facet.MapFacet.prototype.setParentEventTarget = function (parent) {
  goog.base(this, 'setParentEventTarget', parent);
  // TODO: listen for map updated events
  this.eventHandler.listen(parent, z.client.events.EventType.START_TURN,
      function(e){
        this.update(e.data.tiles);
      });
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

/**
 * @param {z.common.entities.Tile} tile
 * @return {z.client.facet.TileFacet}
 */
z.client.facet.MapFacet.prototype.getTileFacet = function (tile) {
  var tileFacet = this._grid.getNode(tile.x, tile.y);
  if (!tileFacet) {
    tileFacet = new z.client.facet.TileFacet(tile);
    this._grid.setNode(tile.x, tile.y, tileFacet);
    this.visibleTiles.push(tileFacet);
  }
  return tileFacet;
};

z.client.facet.MapFacet.prototype.getAdjacent = function (x, y) {
  return this._grid.getAdjacent(x, y);
};

/**
 * @param {z.common.entities.Tile[]} tiles
 */
z.client.facet.MapFacet.prototype.update = function (tiles) {
  goog.array.forEach(tiles, function (tile) {
        var facet = this.getTileFacet(tile);
        facet.update(tile);
      }, this
  );
};
