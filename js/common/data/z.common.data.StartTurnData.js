goog.provide('z.common.data.StartTurnData');

goog.require('z.common.data.TileData');
goog.require('goog.array');

/**
 *
 * @param {!mugd.utils.guid} actorId
 * @param {Array.<!z.common.data.TileData>} tiles
 * @param {number} turn
 * @constructor
 */
z.common.data.StartTurnData = function (actorId, tiles, turn) {
  this.actorId = actorId;
  this.tiles = tiles;
  this.turn = turn;
};

/**
 * @param {!z.common.protocol.startTurn} protocol
 * @return {!z.common.data.StartTurnData}
 */
z.common.data.StartTurnData.fromProtocol = function (protocol) {
  var tiles = goog.array.map(protocol['tiles'], z.common.data.TileData.fromProtocol);
  return new z.common.data.StartTurnData(
      protocol['actorId'],
      tiles,
      protocol['turn']
  );
};

/**
 * @return {z.common.protocol.startTurn}
 */
//z.common.data.StartTurnData.toProtocol = function () {
//  TODO: finish z.common.data.StartTurnData.toProtocol
//  return {};
//};