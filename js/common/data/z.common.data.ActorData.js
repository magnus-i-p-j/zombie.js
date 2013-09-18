goog.provide('z.common.data.ActorData');

goog.require('z.common.data.EntityData');

/**
 * @param {?mugd.utils.guid} guid
 * @param {string} type
 * @param {Object.<z.common.protocol.type,number>} stockpile
 * @constructor
 * @implements {z.common.data.EntityData}
 */
z.common.data.ActorData = function (guid, type, stockpile) {
  this.guid = guid;
  this.ownerId = guid;
  this.type = type;
  this.stockpile = stockpile;
  this.category = z.common.rulebook.category.ACTOR;
};

/**
 * @param {!z.common.entities.Actor} actor
 * @return {!z.common.data.ActorData}
 */
z.common.data.ActorData.fromEntity = function (actor) {
  return new z.common.data.ActorData(
      actor.guid,
      actor.meta.type,
      actor.stockpile.peekAll()
  );
};

/**
 * @param {!z.common.protocol.actor} protocol
 * @return {!z.common.data.ActorData}
 */
z.common.data.ActorData.fromProtocol = function (protocol) {
  return new z.common.data.ActorData(
      protocol['actorId'],
      protocol['type'],
      protocol['stockpile']
  );
};

/**
 * @param {!z.common.entities.Actor} actor
 * @return {!z.common.protocol.actor}
 */
z.common.data.ActorData.toProtocol = function (actor) {
  return /** @type !z.common.protocol.actor  */ {
      'actorId': actor.guid,
      'type': actor.meta.type
  };
};