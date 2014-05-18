goog.provide('z.client.facet.CharacterListFacet');

goog.require('z.client.facet.Facet');
goog.require('z.common.events');
goog.require('z.client.facet.ProjectFacet');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @param {z.common.EntityQuery} entityQuery
 * @extends {z.client.facet.Facet}
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.client.facet.CharacterListFacet = function (services) {
  goog.base(this);

  /**
   * @expose
   * @type {function(Array.<!z.client.facet.CharacterFacet>=):!Array.<!z.client.facet.CharacterFacet>}
   */
  this['characters'] = ko.observableArray();
  this._repo = /** @type {!z.common.EntityRepository}*/ services.get(z.common.Resources.REPOSITORY);
  this._entityQuery = /** @type {!z.common.EntityQuery}*/ services.get('entityQuery');
  this._entityQuery.category = z.common.rulebook.category.CHARACTER_TYPE;
};

goog.inherits(z.client.facet.CharacterListFacet, z.client.facet.Facet);

/**
 * @param {goog.events.EventTarget} parent
 */
z.client.facet.CharacterListFacet.prototype.setParentEventTarget = function (parent) {
  goog.base(this, 'setParentEventTarget', parent);
  this.eventHandler.listen(parent, z.common.events.EventType.ENTITY_CREATED, this.doEntityCreated);
  this.eventHandler.listen(parent, z.common.events.EventType.ENTITY_MODIFIED, this.doEntityModified);
  this.eventHandler.listen(parent, z.client.events.EventType.START_TURN, this.doStartTurn);
};

/**
 * @param {!z.common.events.EntityCreated} e
 */
z.client.facet.CharacterListFacet.prototype.doStartTurn = function (e) {
  this['characters'].removeAll();
  var entities = this._repo.filter(this._entityQuery.match.bind(this._entityQuery));
  console.log(entities);
  // TODO: something
};

/**
 * @param {!z.common.events.EntityCreated} e
 */
z.client.facet.CharacterListFacet.prototype.doEntityCreated = function (e) {
  /**
   * @type {!z.common.entities.Entity}
   */
  var entity = e.entity;
};

/**
 * @param {!z.common.events.EntityModified} e
 */
z.client.facet.CharacterListFacet.prototype.doEntityModified = function (e) {
  /**
   * @type {!z.common.entities.Entity}
   */
  var entity = e.entity;
};

