goog.provide('z.common.data.ActorData');

goog.require('z.common.data.EntityData');

/**
 * @param {?mugd.utils.guid} guid
 * @param {!z.common.protocol.state} state
 * @param {string} type
 * @param {Object.<z.common.protocol.type,number>} stockpile
 * @constructor
 * @implements {z.common.data.EntityData}
 */
z.common.data.ActorData = function (guid, state, type, stockpile, points) {
  this.guid = guid;
  this.ownerId = guid;
  this.state = state;
  this.type = type;
  this.stockpile = stockpile;
  this.category = z.common.rulebook.category.ACTOR;
  this.points = points;
};

/**
 * @param {!z.common.entities.Actor} actor
 * @return {!z.common.data.ActorData}
 */
z.common.data.ActorData.fromEntity = function (actor) {
  return new z.common.data.ActorData(
      actor.guid,
      actor.getState(),
      actor.meta.type,
      actor.stockpile.peekAll(),
      actor.getPoints()
  );
};
