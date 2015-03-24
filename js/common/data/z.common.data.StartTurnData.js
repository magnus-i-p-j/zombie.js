goog.provide('z.common.data.StartTurnData');

goog.require('z.common.data.TileData');
goog.require('goog.array');

/**
 * @param {!mugd.utils.guid} actorId
 * @param {Array.<!z.common.data.TileData|!z.common.data.ActorData|!z.common.data.ProjectData|!z.common.data.CharacterData>} entities
 * @param {Array.<!mugd.utils.guid>} killed
 * @param {Array.<Object>} messages
 * @param {number} turn
 * @constructor
 */
z.common.data.StartTurnData= function (actorId, entities, killed, messages, turn, season) {
  this.actorId = actorId;
  this.entities = entities;
  this.turn = turn;
  this.season = season;
  this.killed = killed;
  this.messages = messages;
};