var z = z || {};
z.engine = z.engine || {};

z.engine.BoundedMap = function () {
    'use strict';
    this.mapData = new z.util.Grid();

    this.getTiles = function () {
    };
    this.getTile = function (c, r) {
        var tile = this.mapData.getNode(c, r);
        if ( !tile ) {
            tile = { terrain: 'unknown' };
        }
        return tile;
    };
    this.feed = function (tileDataIterable) {
        var self = this;
        tileDataIterable.each(function (item) {
            self.mapData.setNode(item.c, item.r, { terrain: item.terrain })
        });
    };
};
