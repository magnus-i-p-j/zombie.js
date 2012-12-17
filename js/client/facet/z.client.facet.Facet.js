goog.provide('z.client.facet.Facet');

goog.require('goog.events.EventTarget');
goog.require('goog.events.EventHandler');

/**
 * @extends {goog.events.EventTarget}
 * @constructor
 */
z.client.facet.Facet = function () {
  goog.base(this);
  /**
   * @type {goog.events.EventHandler}
   * @protected
   */
  this.eventHandler = new goog.events.EventHandler(this);
};

goog.inherits(z.client.facet.Facet, goog.events.EventTarget);
