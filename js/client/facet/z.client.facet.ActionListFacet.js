goog.provide('z.client.facet.ActionListFacet');

goog.require('mugd.injector.Injector');
goog.require('z.client');

goog.require('z.client.facet.Facet');

/**
 * @extends {z.client.facet.Facet}
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.client.facet.ActionListFacet = function (services) {
  goog.base(this);
  /**
   * @type {function(Array.<!z.client.facet.ActionFacet>=):!Array.<!z.client.facet.ActionFacet>}
   */
  this['actionFacets'] = ko.observableArray();
};

goog.inherits(z.client.facet.ActionListFacet, z.client.facet.Facet);

