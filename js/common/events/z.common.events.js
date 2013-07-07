goog.provide('z.common.events');

goog.require('goog.events');

/**
 * @enum {string}
 */
z.common.events.EventType = {
  ENTITY_CREATED: goog.events.getUniqueId('entity_created'),
  ENTITY_MODIFIED: goog.events.getUniqueId('entity_modified')
};