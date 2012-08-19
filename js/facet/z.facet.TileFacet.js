goog.provide('z.facet.TileFacet');

goog.require('z.client.events.TileUpdatedEvent');
goog.require('z.facet.ActionFacet');

z.facet.TileFacet = function (gem, x, y) {
  this.x = x;
  this.y = y;
  this.gem = gem;
  this.map = gem.map;

  var tile = this.getTile();

  this.terrain = ko.observable(tile.terrain);

  gem.evr.subscribe(z.client.events.TileUpdatedEvent, this.tileUpdatedCallback.bind(this));

  this.SetPossibleActions();
};

z.facet.TileFacet.prototype.getTile = function () {
  return this.map.getTile(this.x, this.y);
};

z.facet.TileFacet.prototype.SetPossibleActions = function () {
  this.possibleActions = ko.observableArray();
  var possibleActions = this.gem.rulebook.possibleActions('Tile', this.getTile());
  var self = this;
  var actionFacets = goog.array.map(possibleActions, function (action) {
    return new z.facet.ActionFacet(self.gem, self, action)
  });
  this.possibleActions.push(actionFacets);
};

z.facet.TileFacet.prototype.tileUpdatedCallback = function (tileUpdatedEvent) {
  if (tileUpdatedEvent.source === this.map && tileUpdatedEvent.data.x === this.x && tileUpdatedEvent.data.y === this.y) {
    var tile = this.getTile();
    this.terrain(tile.terrain);
  }
};

