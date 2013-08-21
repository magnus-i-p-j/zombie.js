goog.provide('z.client.facet.EntityFacet');

goog.require('z.client.facet.Facet');

goog.require('goog.events.EventTarget');
goog.require('goog.events.EventHandler');

/**
 * @extends {z.client.facet.Facet}
 * @constructor
 */
z.client.facet.EntityFacet = function () {
  goog.base(this);

  /**
   * @type {z.common.entities.Entity}
   */
  this.entity = null;
  /**
   * @type {function(z.common.rulebook.meta=):!z.common.rulebook.meta}
   */
  this.meta = ko.observable();

  /**
   * @type {?mugd.utils.guid}
   */
  this['guid'] = null;

  this['category'] = ko.computed(function () {
    var meta = this.meta();
    return meta ? meta.category : undefined;
  }, this);
  this['name'] = ko.computed(function () {
    var meta = this.meta();
    return meta ? meta.name : undefined;
  }, this);
  this['description'] = ko.computed(function () {
    var meta = this.meta();
    return meta ? meta.description : undefined;
  }, this);
  this['type'] = ko.computed(function () {
    var meta = this.meta();
    return meta ? meta.type : undefined;
  }, this);
};

goog.inherits(z.client.facet.EntityFacet, z.client.facet.Facet);

/**
 * @protected
 * @param {!z.common.entities.Entity} entity
 */
z.client.facet.EntityFacet.prototype.setEntity = function (entity) {
  if (!this.entity || this.entity && this.entity.guid === entity.guid) {
    this.entity = entity;
    this['guid'] = this.entity.guid;
    this.meta(entity.meta);
    this.eventHandler.listen(entity, z.common.events.EventType.ENTITY_MODIFIED, this.doEntityModified);
  } else {
    throw ['Wrong entity, expected (', this.entity.guid , '), got (', entity.guid, ')'].join('');
  }
};

/**
 * @param {z.common.events.EntityModified} event
 */
z.client.facet.EntityFacet.prototype.doEntityModified = function(event){
   this.meta(event.entity.meta);
};
