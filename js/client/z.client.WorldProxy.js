goog.provide('z.client.WorldProxy');

goog.require('goog.events.EventTarget');

goog.require('mugd.injector.Injector');
goog.require('z.client');
goog.require('z.service.world.World');
goog.require('z.client.events.StartTurn');
goog.require('z.service.world.RandomTerrainGenerator');
goog.require('z.common.data.StartTurnData');
goog.require('goog.array');
goog.require('z.common.data.ClientEndTurn');
goog.require('z.common.data.ActorData');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {goog.events.EventTarget}
 * @constructor
 * @implements {mugd.injector.IInjectable}
 */
z.client.WorldProxy = function (services) {
  goog.base(this);
  /**
   * @type {!Object}
   */
  var ruleset = /** @type {!Object} */services.get(z.client.Resources.RULESET);
  /**
   * @type {!z.service.world.World}
   * @private
   */
  this._world = (/** @type {function(!Object):!z.service.world.World} */ services.get(z.client.Resources.WORLD_SERVICE))(ruleset);
  /**
   * @type {!z.common.EntityRepository}
   * @private
   */
  this._repository = /** @type {!z.common.EntityRepository} */services.get(z.client.Resources.REPOSITORY);
  this._actorId = null;
  this._turn = 0;
};

goog.inherits(z.client.WorldProxy, goog.events.EventTarget);

z.client.WorldProxy.prototype.firstTurn = function () {
  /**
   * @type {function (!z.common.protocol.startTurn)}
   */
  var callback = goog.bind(this.doStartTurn, this);
  this._actorId = this._world.createActor(callback);
  var endTurnData = new z.common.data.ClientEndTurn(this._actorId, this._turn);
  this._world.actorEndTurn(endTurnData);
};

/**
 * @param {!z.common.protocol.startTurn} startTurn
 */
z.client.WorldProxy.prototype.doStartTurn = function (startTurn) {
  var startTurnData = z.common.data.StartTurnData.fromProtocol(startTurn);
  this._turn = startTurnData.turn;
  var tiles = goog.array.map(startTurnData.tiles, this._repository.put, this._repository);
  var e = new z.client.events.StartTurn({
        tiles: tiles,
        turn: this._turn
      }
  );
  this.dispatchEvent(e);
};

z.client.WorldProxy.prototype.endTurn = function () {
  if (goog.isNull(this._actorId)) {
    throw 'Tried to end turn with no actor';
  }
  var endTurnData = new z.common.data.ClientEndTurn(this._actorId, this._turn);
  this._world.actorEndTurn(endTurnData);
};