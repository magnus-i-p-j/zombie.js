goog.provide('z.client.facet.ModalFacet');

goog.require('z.client.facet.Facet');
goog.require('z.client.facet.UserInterfaceFacet');
goog.require('goog.debug.Logger');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.client.facet.Facet}
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.client.facet.ModalFacet = function(services) {

  /**
   * @type {function(z.client.facet.UserInterfaceFacet=):z.client.facet.UserInterfaceFacet}
   */
  this['facet'] = ko.observable(null);
};

goog.inherits(z.client.facet.ModalFacet, z.client.facet.Facet);

/**
 * @type {!goog.debug.Logger}
 * @protected
 */
z.client.facet.ModalFacet.prototype._logger = goog.debug.LogManager.getLogger('z.client.facet.ModalFacet');

z.client.facet.ModalFacet.prototype['openTest'] = function() {
};

z.client.facet.ModalFacet.prototype['close'] = function() {
  this['facet'](null);
};