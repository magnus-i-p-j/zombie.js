goog.provide('z.engine.TrivialMap');

z.engine.TrivialMap = function () {
  'use strict';
  this.mapData = {};

  this.getTiles = function () {
  };
  this.getTile = function (top, right) {
    var tileId = this._getTileId(top, right);
    if (this.mapData[tileId]) {
      return this.mapData[tileId];
    }
    return { terrain:'terra_incognita' };
  };
  this._getTileId = function (x, y) {
    return x + ', ' + y;
  };
  this.feed = function (tileDataIterable) {
    var index, tileData;
    for (index in tileDataIterable) {
      if (tileDataIterable.hasOwnProperty(index)) {
        tileData = tileDataIterable[index];
        this.mapData[this._getTileId(tileData.c, tileData.r)] = { terrain:tileData.terrain };
      }
    }
  };
};

