goog.provide('z.client.events');

goog.require('goog.events');

/**
 * @typedef {{
 *  target: z.client.facet.EntityFacet
 * }}
 */
z.client.events.Args;

/**
 * @enum {string}
 */
z.client.events.EventType = {
  START_TURN: goog.events.getUniqueId('start_turn'),
  SHOW_CONTEXT_MENU: goog.events.getUniqueId('show_context_menu')
};
