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

/**
 * @deprecated
 * @param {z.common.entities.Actor} actor
 */
z.client.facet.ActorFacet.prototype.update = function (actor) {
};

z.client.facet.ActorFacet.prototype.doEntityModified = function(event){
  console.log('actor modified');
  goog.base(this,'doEntityModified', event);
  this['resources'].update(event.entity.stockpile);
  console.log('actor modified');
};
