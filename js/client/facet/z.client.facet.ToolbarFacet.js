goog.provide('z.client.facet.ToolbarFacet');

goog.require('goog.array');
goog.require('z.client.facet.ActionFacet');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.client.facet.Facet}
 * @constructor
 */
z.client.facet.ToolbarFacet = function (services) {
  goog.base(this);

  /**
   * @type {function(Array.<!z.client.facet.ActionFacet>=):!Array.<!z.client.facet.ActionFacet>}
   */
  this['actionFacets'] = ko.observableArray();

  var endTurnAction = services.get(z.client.Resources.END_TURN_ACTION);
  var openProjectManagementAction = services.get(z.client.Resources.OPEN_PROJECT_MANAGEMENT_ACTION);
  this['actionFacets'].push(new z.client.facet.ActionFacet(endTurnAction));
  this['actionFacets'].push(new z.client.facet.ActionFacet(openProjectManagementAction));
};

goog.inherits(z.client.facet.ToolbarFacet, z.client.facet.Facet);
