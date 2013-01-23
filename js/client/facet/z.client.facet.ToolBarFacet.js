goog.provide('z.client.facet.ToolbarFacet');

/**
 * @extends {z.client.facet.Facet}
 * @constructor
 * @param {function():!Array.<!z.client.facet.ActionFacet>} actionFacetCreator
 */
z.client.facet.ToolbarFacet = function (actionFacetCreator) {
  goog.base(this);
  /**
   * @expose
   * @type {function(Array.<!z.client.facet.ActionFacet>=):!Array.<!z.client.facet.ActionFacet>}
   */
  this.actionFacets = ko.observableArray(actionFacetCreator());
};
goog.inherits(z.client.facet.ToolbarFacet, z.client.facet.Facet);


z.client.facet.ToolbarFacet.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.TOOLBAR_ACTION_FACETS
];
