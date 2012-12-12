goog.provide('z.client.events.ShowContextMenu');

goog.require('goog.events.Event');

/**
 * @param {z.client.facet.Facet[]} context
 * @param {goog.math.Coordinate} position
 * @constructor
 */
z.client.events.ShowContextMenu = function (context, position) {
  goog.base(this, z.client.events.EventType.SHOW_CONTEXT_MENU);
  this.context = context;
  this.position = position;
};

goog.inherits(z.client.events.ShowContextMenu, goog.events.Event);
