goog.provide('z.common.data.ClientEndTurn');

/**
 * @param {!mugd.utils.guid} actorId
 * @param {number} turn
 * @param {!Array.<!z.common.data.ProjectData|!z.common.data.CharacterData>} entities
 * @constructor
 */
z.common.data.ClientEndTurn = function (actorId, turn, entities) {
  this.actorId = actorId;
  this.turn = turn;
  this.entities = entities;
};