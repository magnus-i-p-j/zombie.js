goog.provide('z.client.facet.ProjectListFacet');

goog.require('z.client.facet.Facet');
goog.require('z.common.events');
goog.require('z.client.facet.ProjectFacet');
goog.require('z.client');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.client.facet.Facet}
 * @implements mugd.injector.IInjectable
 * @constructor
 */
z.client.facet.ProjectListFacet = function (services) {
  goog.base(this);

  /**
   * @expose
   * @type {function(Array.<!z.client.facet.ProjectFacet>=):!Array.<!z.client.facet.ProjectFacet>}
   */
  this['projects'] = ko.observableArray();
  this.newProjectFacet = function() {
    var newFacet = services.get(z.client.Resources.PROJECT_FACET);
    return newFacet;
  };
};

goog.inherits(z.client.facet.ProjectListFacet, z.client.facet.Facet);

/**
 * @param {goog.events.EventTarget} parent
 */
z.client.facet.ProjectListFacet.prototype.setParentEventTarget = function (parent) {
  goog.base(this, 'setParentEventTarget', parent);
  this.eventHandler.listen(parent, z.common.events.EventType.ENTITY_CREATED, this.doEntityCreated);
  this.eventHandler.listen(parent, z.common.events.EventType.ENTITY_MODIFIED, this.doEntityModified);
  this.eventHandler.listen(parent, z.client.events.EventType.START_TURN, this.doStartTurn);
};

/**
 * @param {!z.common.events.EntityCreated} e
 */
z.client.facet.ProjectListFacet.prototype.doStartTurn = function (e) {
  this['projects'].remove(function(project){
    return project['remove']();
  });
};

/**
 * @param {!z.common.events.EntityCreated} e
 */
z.client.facet.ProjectListFacet.prototype.doEntityCreated = function (e) {
  /**
   * @type {!z.common.entities.Entity}
   */
  var entity = e.entity;
  if (entity instanceof z.common.entities.Project) {
    var projectFacet = this.newProjectFacet();
    projectFacet.setEntity(entity);
    this['projects'].push(projectFacet);
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
};

