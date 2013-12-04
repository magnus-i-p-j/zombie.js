goog.provide('mugd.utils.Grid');

/**
 * @constructor
 */
mugd.utils.Grid = function () {
  /**
   * @type {!number}
   * @private
   */
  this._offsetX = mugd.utils.Grid.width / 2;
  /**
   * @type {!number}
   * @private
   */
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

/**
 * @type {!number}
 */
mugd.utils.Grid.width = 500;
/**
 * @type {!number}
 */
mugd.utils.Grid.height = 500;

/**
 * @param {number} x
 * @param {number} y
 * @param {*} node
 */
mugd.utils.Grid.prototype.setNode = function (x, y, node) {
  this._data[x + this._offsetX][y + this._offsetY] = node;
  if (node.guid) {
    this._idMap[node.guid] = node;
  }
};

/**
 * @param {number} x
 * @param {number} y
 * @return {*}
 */
mugd.utils.Grid.prototype.getNode = function (x, y) {
  return this._data[x + this._offsetX][y + this._offsetY];
};

/**
 * @param {mugd.utils.guid} guid
 * @return {*|null}
 */
mugd.utils.Grid.prototype.getNodeById = function (guid) {
  return this._idMap[guid] || null;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {Array}
 */
mugd.utils.Grid.prototype.getAdjacent = function (x, y) {
  return [
    this.getNode(x - 1, y    ),
    this.getNode(x - 1, y + 1),
    this.getNode(x    , y + 1),
    this.getNode(x + 1, y + 1),
    this.getNode(x + 1, y),
    this.getNode(x + 1, y - 1),
    this.getNode(x    , y - 1),
    this.getNode(x - 1, y - 1)
  ];
};

