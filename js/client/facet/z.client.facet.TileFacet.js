goog.provide('z.client.facet.TileFacet');

goog.require('z.client.events.TileUpdatedEvent');
goog.require('z.client.facet.ActionFacet');

z.client.facet.TileFacet.actions = (
  function(){

  }
)();

z.client.facet.TileFacet = function (gem, x, y) {
  this.x = x;
  this.y = y;
  this._gem = gem;
  this.map = gem.map;

  var tile = this.getTileFacet();

  this.terrain = ko.observable(tile.terrain);
};



z.client.facet.TileFacet.prototype.getTileFacet = function () {
  return this.map.getTileFacet(this.x, this.y);
};


z.client.facet.TileFacet.prototype.tileUpdatedCallback = function (tileUpdatedEvent) {
  if (tileUpdatedEvent.source === this.map && tileUpdatedEvent.data.x === this.x && tileUpdatedEvent.data.y === this.y) {
    var tile = this.getTileFacet();
    this.terrain(tile.terrain);
  }
};

