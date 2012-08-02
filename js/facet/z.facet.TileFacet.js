goog.provide('z.facet.TileFacet');
goog.require('z.client.events.TileUpdatedEvent');

z.facet.TileFacet = function (map, evr, x, y) {
    this.x = x;
    this.y = y;
    this.map = map;

    var tile = this.getTile();

    this.terrain = ko.observable(tile.terrain);

    evr.subscribe(z.client.events.TileUpdatedEvent, this.tileUpdatedCallback.bind(this));
};

z.facet.TileFacet.prototype.getTile = function(){
    return this.map.getTile(this.x, this.y);
}

z.facet.TileFacet.prototype.tileUpdatedCallback = function (tileUpdatedEvent) {
    if (tileUpdatedEvent.source === this.map && tileUpdatedEvent.data.x === this.x && tileUpdatedEvent.data.y === this.y) {
        var tile = this.getTile();
        this.terrain(tile.terrain);
    }
};

