goog.provide('z.client.facet.InfoFacet');

goog.require('z.client.facet.Facet');

/**
 * @extends {z.client.facet.Facet}
 * @constructor
 */
z.client.facet.InfoFacet = function () {
  goog.base(this);

  /**
   * @type {function(number=):number}
   */
  this['turn'] = ko.observable();
};

goog.inherits(z.client.facet.InfoFacet, z.client.facet.Facet);

z.client.facet.InfoFacet.prototype[mugd.injector.Injector.DEPS] = [];


/**
 * @param {goog.events.EventTarget} parent
 */
z.client.facet.InfoFacet.prototype.setParentEventTarget = function (parent) {
  goog.base(this, 'setParentEventTarget', parent);
  this.eventHandler.listen(parent, z.client.events.EventType.START_TURN, this.doStartTurn);
};

/**
 * @param  {!z.client.events.StartTurn} e
 */
z.client.facet.InfoFacet.prototype.doStartTurn = function (e) {
  this['turn'](e.data.turn);
};
