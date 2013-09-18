goog.provide('z.client.facet.ProjectFacet');

goog.require('z.client.facet.EntityFacet');

/**
 * @extends {z.client.facet.EntityFacet}
 * @constructor
 */
z.client.facet.ProjectFacet = function () {
  goog.base(this);
  //this['investment'] = ;
};

goog.inherits(z.client.facet.ProjectFacet, z.client.facet.EntityFacet);

z.client.facet.ProjectFacet.prototype.doEntityModified = function(event){
  goog.base(this,'doEntityModified', event);
};