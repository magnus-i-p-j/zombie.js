goog.provide('mugd.utils.Grid');

mugd.utils.Grid = function () {
  this._offsetX = mugd.utils.Grid.width / 2;
  this._offsetY = mugd.utils.Grid.height / 2;
  this._data = (function () {
    var data = [];
    data.length = mugd.utils.Grid.width;
    for (var i = 0; i < mugd.utils.Grid.height; ++i) {
      data[i] = [];
      data[i].length = mugd.utils.Grid.height;
    }
    return data;
  })();
  this._idMap = {};
};

mugd.utils.Grid.width = 500;
mugd.utils.Grid.height = 500;

mugd.utils.Grid.prototype.setNode = function (x, y, node) {
  this._data[x + this._offsetX][y + this._offsetY] = node;
  if (node.guid) {
    this._idMap[node.guid] = node;
  }
};

mugd.utils.Grid.prototype.getNode = function (x, y) {
  return this._data[x + this._offsetX][y + this._offsetY];
};

mugd.utils.Grid.prototype.getNodeById = function (guid) {
  return this._idMap[guid] || null;
};

mugd.utils.Grid.prototype.getAdjacent = function (x, y) {
  var tiles;
  if (y % 2 === 0) {
    tiles = [
        {x: x, y: y - 1}, {x: x + 1, y: y - 1}, {x: x + 1, y: y}, {x: x + 1, y: y + 1}, {x: x, y: y + 1}, {x: x - 1, y: y}
    ];
  } else {
    tiles = [
        {x: x - 1, y: y - 1}, {x: x, y: y - 1}, {x: x + 1, y: y}, {x: x, y: y + 1}, {x: x - 1, y: y + 1}, {x: x - 1, y: y}
    ];
  }
  return tiles;
};
