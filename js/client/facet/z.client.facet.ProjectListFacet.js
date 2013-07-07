goog.provide('z.client.facet.ProjectListFacet');

goog.require('z.client.facet.Facet');
goog.require('z.common.events');

/**
 * @extends {z.client.facet.Facet}
 * @constructor
 */
z.client.facet.ProjectListFacet = function () {
  goog.base(this);

  /**
   * @expose
   * @type {function(Array.<!z.client.facet.ProjectFacet>=):!Array.<!z.client.facet.ProjectFacet>}
   */
  this['projects'] = ko.observableArray();

};

/**
 * @param {goog.events.EventTarget} parent
 */
z.client.facet.InfoFacet.prototype.setParentEventTarget = function (parent) {
  goog.base(this, 'setParentEventTarget', parent);
  this.eventHandler.listen(parent, z.common.events.EntityCreated, this.doEntityCreated);
  this.eventHandler.listen(parent, z.common.events.EntityModified, this.doEntityModified);
};

z.client.facet.InfoFacet.prototype.doEntityCreated = function () {
  console.log("EntityCreated");
};

z.client.facet.InfoFacet.prototype.doEntityModified = function () {
  console.log("EntityModified");
};

goog.inherits(z.client.facet.ProjectListFacet, z.client.facet.Facet);
