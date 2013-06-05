goog.provide('z.client.facet.ToolbarFacet');

goog.require('goog.array');
goog.require('z.client.facet.ActionFacet');

/**
 * @extends {z.client.facet.Facet}
 * @constructor
 * @param {...z.client.action.Action} actions
 */
z.client.facet.ToolbarFacet = function (actions) {
  goog.base(this);

  /**
   * @expose
   * @type {function(Array.<!z.client.facet.ActionFacet>=):!Array.<!z.client.facet.ActionFacet>}
   */
  this.actionFacets = ko.observableArray(goog.array.map(arguments, function (action) {
    return new z.client.facet.ActionFacet(action);
  }));

};

goog.inherits(z.client.facet.ToolbarFacet, z.client.facet.Facet);

z.client.facet.ToolbarFacet.prototype[mugd.injector.Injector.DEPS] = [
  z.client.Resources.END_TURN_ACTION
];
