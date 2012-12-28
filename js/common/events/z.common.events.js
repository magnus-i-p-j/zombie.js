goog.provide('z.common.events');

goog.require('goog.events');

/**
 * @enum {string}
 */
z.common.events.EventType = {
  ENTITY_DELETED: goog.events.getUniqueId('entity_deleted')
};