goog.provide('z.common.data.TileData');

/**
 * @param {?mugd.utils.guid} tileId
 * @param {number} x
 * @param {number} y
 * @param {string} type
 * @constructor
 */
z.common.data.TileData = function (tileId, x, y, type) {
  this.tileId = tileId;
  this.x = x;
  this.y = y;
  this.type = type;
};

/**
 * @param {!z.common.protocol.tile} protocol
 * @return {!z.common.data.TileData}
 */
z.common.data.TileData.fromProtocol = function (protocol) {
  return new z.common.data.TileData(
      protocol['tileId'],
      protocol['x'],
      protocol['y'],
      protocol['type']
  );
};

/**
 * @param {!z.common.entities.Tile} tile
 * @return {!z.common.protocol.tile}
 */
z.common.data.TileData.toProtocol = function (tile) {
  return {
      'tileId': tile.guid,
      'x': tile.position.x,
      'y': tile.position.y,
      'type': tile.meta.type
  };
};