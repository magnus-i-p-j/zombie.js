goog.provide('z.client.events.ShowContextMenu');

goog.require('goog.events.Event');

/**
 * @param {Array.<!z.common.rulebook.meta>} context
 * @param {goog.math.Coordinate} position
 * @extends {goog.events.Event}
 * @constructor
 */
z.client.events.ShowContextMenu = function (context, position) {
  goog.base(this, z.client.events.EventType.SHOW_CONTEXT_MENU);
  this.context = context;
  this.position = position;
};

goog.inherits(z.client.events.ShowContextMenu, goog.events.Event);
