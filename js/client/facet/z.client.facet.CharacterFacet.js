goog.provide('z.client.facet.CharacterFacet');

goog.require('z.client.facet.EntityFacet');

/**
 * @extends {z.client.facet.EntityFacet}
 * @constructor
 */
z.client.facet.CharacterFacet = function () {
  goog.base(this);
};

goog.inherits(z.client.facet.CharacterFacet, z.client.facet.EntityFacet);

z.client.facet.CharacterFacet.prototype._update = function () {
  var character = /** @type {z.common.entities.Character} */ this.entity;
};
