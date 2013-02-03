goog.provide('z.client.facet.ActionListFacet');

goog.require('mugd.Injector');
goog.require('z.client');

goog.require('z.client.facet.Facet');

/**
 * @extends {z.client.facet.Facet}
 * @constructor
 */
z.client.facet.ActionListFacet = function () {
  goog.base(this);
  /**
   * @expose
   * @type {function(Array.<!z.client.facet.ActionFacet>=):!Array.<!z.client.facet.ActionFacet>}
   */
  this.actionFacets = ko.observableArray();
};

goog.inherits(z.client.facet.ActionListFacet, z.client.facet.Facet);

z.client.facet.ActionListFacet.prototype[mugd.Injector.DEPS] = [
];

