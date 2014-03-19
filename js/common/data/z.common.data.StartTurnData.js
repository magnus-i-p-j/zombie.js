goog.provide('z.common.data.StartTurnData');

goog.require('z.common.data.TileData');
goog.require('goog.array');

/**
 * @param {!mugd.utils.guid} actorId
 * @param {Array.<!z.common.data.TileData|!z.common.data.ActorData|!z.common.data.ProjectData>} entities
 * @param {Array.<!mugd.utils.guid>} killed
 * @param {number} turn
 * @constructor
 */
z.common.data.StartTurnData = function (actorId, entities, killed, turn) {
  this.actorId = actorId;
  this.entities = entities;
  this.turn = turn;
  this.killed = killed;
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