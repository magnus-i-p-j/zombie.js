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

goog.inherits(z.client.facet.ProjectListFacet, z.client.facet.Facet);

/**
 * @param {goog.events.EventTarget} parent
 */
z.client.facet.ProjectListFacet.prototype.setParentEventTarget = function (parent) {
  goog.base(this, 'setParentEventTarget', parent);
  this.eventHandler.listen(parent, z.common.events.EventType.ENTITY_CREATED, this.doEntityCreated);
  this.eventHandler.listen(parent, z.common.events.EventType.ENTITY_MODIFIED, this.doEntityModified);
};

/**
 * @param {!z.common.events.EntityCreated} e
 */
z.client.facet.ProjectListFacet.prototype.doEntityCreated = function (e) {
  /**
   * @type {!z.common.entities.Entity}
   */
  var entity = e.entity;
  if(entity instanceof z.common.entities.Project){
    console.log("Project created");
  }
};

/**
 * @param {!z.common.events.EntityModified} e
 */
z.client.facet.ProjectListFacet.prototype.doEntityModified = function (e) {
  /**
   * @type {!z.common.entities.Entity}
   */
  var entity = e.entity;
  if(entity instanceof z.common.entities.Project){
    console.log("Project modified");
  }
};

