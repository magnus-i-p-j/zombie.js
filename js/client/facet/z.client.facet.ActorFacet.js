goog.provide('z.client.facet.ActorFacet');

goog.require('z.client.facet.EntityFacet');
goog.require('z.common');
goog.require('z.common.queries');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.client.facet.EntityFacet}
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.client.facet.ActorFacet = function (services) {
  goog.base(this);
  this['resources'] = new z.client.facet.StockpileFacet();
  this['points'] = ko.observable(0);

  /** @type {!mugd.injector.Injector} */
  var injector = /** @type {!mugd.injector.Injector} */ (services.get(z.common.Resources.INJECTOR));

  this._entityQueryObservable = ko.observable(z.common.EntityQuery.empty());
  /**
   * @type {function(z.client.facet.CharacterListFacet=):z.client.facet.CharacterListFacet}
   */
  this['unassignedCharactersListFacet'] = /** @type {function(z.client.facet.CharacterListFacet=):z.client.facet.CharacterListFacet} */ (injector.Compose(z.client.facet.CharacterListFacet)
    .With({'entityQueryObservable': this._entityQueryObservable}).New());
};

goog.inherits(z.client.facet.ActorFacet, z.client.facet.EntityFacet);

z.client.facet.ActorFacet.prototype.setParentEventTarget = function (parent) {
  goog.base(this, 'setParentEventTarget', parent);
  this['unassignedCharactersListFacet'].setParentEventTarget(parent);
};

/**
 * @inheritDoc
 */
z.client.facet.ActorFacet.prototype._update = function () {
  var actor = /** @type {z.common.entities.Actor} */ (this.entity());
  this['resources'].update(actor.stockpile);
  this['points'](actor.getPoints());
  var entityQuery = z.common.queries.getUnassignedQuery(actor.guid);

  this._entityQueryObservable(entityQuery);
};

