goog.provide('z.client.events');

goog.require('goog.events');

/**
 * @enum {string}
 */
z.client.events.EventType = {
  START_TURN: goog.events.getUniqueId('start_turn')
};
