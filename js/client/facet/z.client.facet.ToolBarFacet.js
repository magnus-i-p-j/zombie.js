goog.provide('z.client.facet.ToolbarFacet');

/**
 * @extends {z.client.facet.Facet}
 * @constructor
 * @param {...z.client.Action} actions
 */
z.client.facet.ToolbarFacet = function (actions) {
  goog.base(this);
  //TODO: Create actionfacets. How!
  /**
   * @expose
   * @type {function(Array.<!z.client.facet.ActionFacet>=):!Array.<!z.client.facet.ActionFacet>}
   */
  this.actionFacets = ko.observableArray();
};

goog.inherits(z.client.facet.ToolbarFacet, z.client.facet.Facet);



z.client.facet.ToolbarFacet.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.END_TURN_ACTION
];
