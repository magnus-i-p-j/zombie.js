goog.provide('z.common.data.TileData');

goog.require('z.common');
goog.require('z.common.data.EntityData');

/**
 * @param {?mugd.utils.guid} guid
 * @param {?mugd.utils.guid} ownerId
 * @param {number} x
 * @param {number} y
 * @param {z.common.terrain} terrain
 * @param {string} type
 * @constructor
 * @implements {z.common.data.EntityData}
 */
z.common.data.TileData = function (guid, ownerId, x, y, terrain, type) {
  /**
   * @type {?mugd.utils.guid}
   */
  this.guid = guid;
  /**
   *
   * @type {?mugd.utils.guid}
   */
  this.ownerId = ownerId;
  /**
   * @type {number}
   */
  this.x = x;
  /**
   * @type {number}
   */
  this.y = y;
  /**
   * @type {z.common.terrain}
   */
  this.terrain = terrain;
  /**
    * @type {string}
   */
  this.type = type;
  /**
   * @type {z.common.rulebook.category}
   */
  this.category = z.common.rulebook.category.TILE;
};

/**
 * @param {!z.common.entities.Tile} tile
 * @return {!z.common.data.TileData}
 */
z.common.data.TileData.fromEntity = function (tile) {
  return new z.common.data.TileData(
      tile.guid,
      tile.owner.guid,
      tile.position.x,
      tile.position.y,
      tile.terrain,
      tile.meta.type
  );
};

/**
 * @param {!z.common.protocol.tile} protocol
 * @return {!z.common.data.TileData}
 */
z.common.data.TileData.fromProtocol = function (protocol) {
  return new z.common.data.TileData(
      protocol['tileId'],
      protocol['ownerId'],
      protocol['x'],
      protocol['y'],
      protocol['terrain'],
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
      'ownerId': tile.owner.guid,
      'x': tile.position.x,
      'y': tile.position.y,
      'terrain': tile.terrain,
      'type': tile.meta.type
  };
};