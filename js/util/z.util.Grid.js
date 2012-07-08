goog.provide('z.util.Grid');

z.util.Grid = function () {
  this._offsetX = z.util.Grid.width / 2;
  this._offsetY = z.util.Grid.height / 2;
  this._data = (function () {
    var data = [];
    data.length = z.util.Grid.width;
    for (var i = 0; i < z.util.Grid.height; ++i) {
      data[i] = [];
      data[i].length = z.util.Grid.height;
    }
    return data;
  })();
  this._idMap = {};
};

z.util.Grid.width = 500;
z.util.Grid.height = 500;

z.util.Grid.prototype.setNode = function (x, y, node) {
  this._data[x + this._offsetX][y + this._offsetY] = node;
  if (node.guid) {
    this._idMap[node.guid] = node;
  }
};

z.util.Grid.prototype.getNode = function (x, y) {
  return this._data[x + this._offsetX][y + this._offsetY];
};

z.util.Grid.prototype.getNodeById = function (guid) {
  return this._idMap[guid] || null;
};

z.util.Grid.prototype.getAdjacent = function (x, y) {
  var tiles;
  if (y % 2 === 0) {
    tiles = [
      this.getNode(x, y - 1), this.getNode(x + 1, y - 1), this.getNode(x + 1, y), this.getNode(x + 1, y + 1), this.getNode(x, y + 1), this.getNode(x - 1, y)
    ];
  } else {
    tiles = [
      this.getNode(x - 1, y - 1), this.getNode(x, y - 1), this.getNode(x + 1, y), this.getNode(x, y + 1), this.getNode(x - 1, y + 1), this.getNode(x - 1, y)
    ];
  }
  return tiles;
};

