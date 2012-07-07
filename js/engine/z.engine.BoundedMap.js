goog.provide('z.engine.BoundedMap');

goog.require('z.util.Grid');

z.engine.BoundedMap = function () {
  'use strict';
  this.mapData = new z.util.Grid();

  this.getTiles = function () {
  };
  this.getTile = function (c, r) {
    var tile = this.mapData.getNode(c, r);
    if (!tile) {
      tile = { terrain:'unknown' };
    }
    return tile;
  };
  this.feed = function (tileDataIterable) {
    var self = this;
    goog.array.forEach(tileDataIterable, function (item) {
      self.mapData.setNode(item.c, item.r, { terrain:item.terrain })
    });
  };
};

