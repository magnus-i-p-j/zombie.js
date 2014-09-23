goog.provide('z.client.facet.UserInterfaceFacet');

goog.require('z.client.facet.Facet');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.client.facet.Facet}
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.client.facet.UserInterfaceFacet = function(services) {
  this['template'] = 'default';
};

goog.inherits(z.client.facet.UserInterfaceFacet, z.client.facet.Facet);
