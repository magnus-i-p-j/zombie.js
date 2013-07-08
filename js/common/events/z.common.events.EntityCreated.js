goog.provide('z.common.events.EntityCreated');

goog.require('goog.events.Event');

/**
 * @param {z.common.entities.Entity} entity
 * @extends {goog.events.Event}
 * @constructor
 */
z.common.events.EntityCreated = function (entity) {
  goog.base(this, z.common.events.EventType.ENTITY_CREATED);
  this.entity = entity;
};

goog.inherits(z.common.events.EntityCreated, goog.events.Event);
