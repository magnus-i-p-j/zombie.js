goog.provide('z.client.facet.EntityFacet');

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
  this.meta = ko.observable();
};

goog.inherits(z.client.facet.EntityFacet, z.client.facet.Facet);

/**
 * @param {!z.common.entities.Entity} entity
 * @constructor
 */
z.client.facet.EntityFacet.prototype.update = function(entity){
  if(!this.entity || this.entity && this.entity.guid === entity.guid){
    this.entity = entity;
    this.meta(entity.meta);
  }else{
    throw ['Wrong entity, expected (', this.entity.guid , '), got (', entity.guid, ')'].join('');
  }
};
