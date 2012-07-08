goog.provide('z.client.Map');

goog.require('z.util.Grid');
goog.require('goog.array');
goog.require('z.client.events.TileUpdatedEvent');
goog.require('z.client.events.TilesUpdatedEvent');
goog.require('z.facet.MapFacet');

z.client.Map = function (evr) {
  this.grid = new z.util.Grid();
  this.evr = evr;
  this.evr.subscribe(z.client.events.TilesUpdatedEvent, this.tilesUpdatedCallback.bind(this));
};

z.client.Map.prototype.tilesUpdatedCallback = function (tilesUpdatedEvent) {
  if (tilesUpdatedEvent.source !== this) {
    var self = this;
    goog.array.forEach(tilesUpdatedEvent.data.tiles, function (tile) {
      self.grid.setNode(tile.x, tile.y, tile);
      self.evr.publish(new z.client.events.TileUpdatedEvent(self, tile.x, tile.y));
    });
  }
};

z.client.Map.prototype.getTile = function (x, y) {
  var tile = this.grid.getNode(x, y);
  if (!tile) {
    tile = this.getPlaceholderTile(x, y);
  }
  return tile;
};

z.client.Map.prototype.getPlaceholderTile = function (x, y) {
  return {
    terrain:'unknown',
    x:x,
    y:y
  };
};

z.client.Map.prototype.getFacet = function (name) {
  if (name === 'Map') {
    return new z.facet.MapFacet(this.evr, this);
  }
};
