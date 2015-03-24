goog.provide('z.client.facet.ProjectManagementFacet');

goog.require('z.client.facet.UserInterfaceFacet');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.client.facet.UserInterfaceFacet}
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.client.facet.ProjectManagementFacet = function(services) {
  this['template'] = 'project_management';

  /**
   * @type {!z.client.facet.ActorFacet}
   */
  var player = /** @type {!z.client.facet.ActorFacet}*/ (services.get(z.client.Resources.PLAYER_FACET));
  /**
   * z.client.facet.StockpileFacet
   */
  this['resources'] = player['resources'];
  this['unassignedCharacters'] = player['unassignedCharactersListFacet'];

  /**
   * @type {z.client.facet.ProjectListFacet}
   */
  this['projects'] = /** @type {z.client.facet.ProjectListFacet} */ (services.get(z.client.Resources.PROJECT_LIST_FACET));
};

goog.inherits(z.client.facet.ProjectManagementFacet, z.client.facet.UserInterfaceFacet);