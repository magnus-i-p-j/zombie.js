goog.provide('z.client.facet.ProjectManagementFacet');

goog.require('z.client.facet.UserInterfaceFacet');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.client.facet.Facet}
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.client.facet.ProjectManagementFacet = function(services) {
  this['template'] = 'project_management';
};

goog.inherits(z.client.facet.ProjectManagementFacet, z.client.facet.UserInterfaceFacet);