goog.provide('z.client.facet.InfoFacet');

goog.require('z.client.facet.Facet');
goog.require('z.client.facet.StockpileFacet');


/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.client.facet.Facet}
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.client.facet.InfoFacet = function (services) {
  goog.base(this);

  /**
   * @type {function(number=):number}
   */
  this['turn'] = ko.observable();
  /**
   * @type {function(string=):string}
   */
  this['season'] = ko.observable();

  /**
   * @type {!z.client.facet.ActorFacet}
   */
  var player = /** @type {!z.client.facet.ActorFacet}*/ services.get(z.client.Resources.PLAYER_FACET);
  this['resources'] = player['resources'];
  this['unassignedCharacters'] = player['unassignedCharactersListFacet'];
  this['points'] = player['points'];
};

goog.inherits(z.client.facet.InfoFacet, z.client.facet.Facet);

/**
 * @param {goog.events.EventTarget} parent
 */
z.client.facet.InfoFacet.prototype.setParentEventTarget = function (parent) {
  goog.base(this, 'setParentEventTarget', parent);
  this.eventHandler.listen(parent, z.client.events.EventType.START_TURN, this.doStartTurn);
};

/**
 * @param  {!z.client.events.StartTurn} e
 */
z.client.facet.InfoFacet.prototype.doStartTurn = function (e) {
  this['turn'](e.data.turn);
  this['season'](e.data.season);
};
