goog.provide('z.common.data.TileData');

goog.require('z.common.data.EntityData');

/**
 * @param {?mugd.utils.guid} guid
 * @param {number} x
 * @param {number} y
 * @param {string} type
 * @constructor
 * @implements {z.common.data.EntityData}
 */
z.common.data.TileData = function (guid, x, y, type) {
  this.guid = guid;
  this.x = x;
  this.y = y;
  this.type = type;
  this.category = z.common.rulebook.category.TERRAIN;
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