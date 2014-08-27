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
   * @type {function(z.common.entities.Entity=):z.common.entities.Entity}
   */
  this.entity = ko.observable();
  /**
   * @type {function(z.common.rulebook.meta=):z.common.rulebook.meta}
   */
  this.meta = ko.computed(this._getMeta, this);

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
 * @param {!z.common.entities.Entity} entity
 */
z.client.facet.EntityFacet.prototype.setEntity = function (entity) {
  if (!this.entity() || this.entity() && this.entity().guid === entity.guid) {
    this.entity(entity);
    this['guid'] = this.entity().guid;
    this.eventHandler.listen(entity, z.common.events.EventType.ENTITY_MODIFIED, this.doEntityModified);
    this._update();
  } else {
    throw ['Wrong entity, expected (', this.entity().guid , '), got (', entity.guid, ')'].join('');
  }
};

/**
 * @param {z.common.events.EntityModified} event
 */
z.client.facet.EntityFacet.prototype.doEntityModified = function (event) {
  this.setEntity(event.entity);
};

/**
 * @protected
 */
z.client.facet.EntityFacet.prototype._update = function () {
  throw {'name': 'NotImplementedException', 'message': '_setEntity'};
};

/**
 * @returns {z.common.rulebook.meta}
 * @private
 */
z.client.facet.EntityFacet.prototype._getMeta = function () {
  var entity = this.entity();
  if (entity) {
    return entity.meta;
  } else {
    return undefined;
  }
};