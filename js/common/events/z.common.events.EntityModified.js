goog.provide('z.common.events.EntityModified');

goog.require('goog.events.Event');

/**
 * @param {z.common.entities.Entity} entity
 * @extends {goog.events.Event}
 * @constructor
 */
z.common.events.EntityModified = function (entity) {
  goog.base(this, z.common.events.EventType.ENTITY_MODIFIED);
  this.entity = entity;
};

goog.inherits(z.common.events.EntityModified, goog.events.Event);
