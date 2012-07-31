goog.provide('z.facet.TileFacet');
goog.require('z.client.events.TileUpdatedEvent');
goog.require('z.facet.TileFacet');

z.facet.TileFacet = function (map, evr, x, y, selectedTileFacet) {
    this.x = x;
    this.y = y;
    this.map = map;
    this.selectedTileFacet = selectedTileFacet;
    var tile = this.map.getTile(x, y);
    this.terrain = ko.observable(tile.terrain);
    evr.subscribe(z.client.events.TileUpdatedEvent, this.tileUpdatedCallback.bind(this));
};

z.facet.TileFacet.prototype.isSelected = ko.computed(function () {
    return this.selectedTileFacet.selectedTile() === this;
}, this);


z.facet.TileFacet.prototype.tileUpdatedCallback = function (tileUpdatedEvent) {
    if (tileUpdatedEvent.source === this.map && tileUpdatedEvent.data.x === this.x && tileUpdatedEvent.data.y === this.y) {
        var tile = this.map.getTile(this.x, this.y);
        this.terrain(tile.terrain);
    }
};

