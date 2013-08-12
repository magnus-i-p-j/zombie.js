goog.provide('z.common.data.StartTurnData');

goog.require('z.common.data.TileData');
goog.require('goog.array');

/**
 *
 * @param {!mugd.utils.guid} actorId
 * @param {Array.<!z.common.data.TileData>} tiles
 * @param {number} turn
 * @param {Array.<!z.common.data.ProjectData>} projects
 * @constructor
 */
z.common.data.StartTurnData = function (actorId, tiles, turn, projects) {
  this.actorId = actorId;
  this.tiles = tiles;
  this.turn = turn;
  this.projects = projects;
};

/**
 * @param {!z.common.protocol.startTurn} protocol
 * @return {!z.common.data.StartTurnData}
 */
z.common.data.StartTurnData.fromProtocol = function (protocol) {
  throw 'NotImplementedException';
};

/**
 * @return {z.common.protocol.startTurn}
 */
//z.common.data.StartTurnData.toProtocol = function () {
//  TODO: finish z.common.data.StartTurnData.toProtocol
//  return {};
//};