goog.provide('z.client.facet.ActorFacet');

goog.require('z.client.facet.EntityFacet');

/**
 * @extends {z.client.facet.EntityFacet}
 * @constructor
 */
z.client.facet.ActorFacet = function () {
  goog.base(this);
};

goog.inherits(z.client.facet.ActorFacet, z.client.facet.EntityFacet);

/**
 * @param {z.common.entities.Actor} actor
 */
z.client.facet.ActorFacet.prototype.update = function (actor) {
  this.setEntity(/** @type {!z.common.entities.Actor} */(actor));
};
