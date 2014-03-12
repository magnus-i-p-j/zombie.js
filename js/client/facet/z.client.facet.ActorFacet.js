goog.provide('z.client.facet.ActorFacet');

goog.require('z.client.facet.EntityFacet');

/**
 * @extends {z.client.facet.EntityFacet}
 * @constructor
 */
z.client.facet.ActorFacet = function () {
  goog.base(this);
  this['resources'] = new z.client.facet.StockpileFacet();
};

goog.inherits(z.client.facet.ActorFacet, z.client.facet.EntityFacet);

z.client.facet.ActorFacet.prototype._update = function () {
  var actor = /** @type {z.common.entities.Actor} */ this.entity;
  this['resources'].update(actor.stockpile);
};

