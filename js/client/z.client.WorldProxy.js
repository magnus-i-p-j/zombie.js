goog.provide('z.client.WorldProxy');

goog.require('goog.events.EventTarget');

goog.require('mugd.Injector');
goog.require('z.client');
goog.require('z.service.world.World');
goog.require('z.client.events.StartTurn');
goog.require('z.service.world.RandomTerrainGenerator');
goog.require('z.common.data.StartTurnData');
goog.require('goog.array');

/**
 * @param {function():!z.service.world.World} initWorldService
 * @param {!Object} ruleset
 * @param {!z.common.EntityFactory} entityFactory
 * @param {!z.common.EntityRepository} repository
 * @extends {goog.events.EventTarget}
 * @constructor
 */
z.client.WorldProxy = function (initWorldService, ruleset, entityFactory, repository) {
  goog.base(this);
  this._world = initWorldService(ruleset);
  this._entityFactory = entityFactory;
  this._repository = repository;
  this._actorId = null;
};

goog.inherits(z.client.WorldProxy, goog.events.EventTarget);

z.client.WorldProxy.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.WORLD_SERVICE,
  z.client.Resources.RULESET,
  z.client.Resources.ENTITY_FACTORY,
  z.client.Resources.REPOSITORY
];


z.client.WorldProxy.prototype.firstTurn = function () {
  /**
   * @type {function (!z.common.protocol.startTurn)}
   */
  var callback = goog.bind(this.doStartTurn, this);
  this._actorId = this._world.createActor(callback);
  this._world.actorEndTurn(this._actorId, {});
};

/**
 * @param {!z.common.protocol.startTurn} startTurn
 */
z.client.WorldProxy.prototype.doStartTurn = function (startTurn) {
  var startTurnData =  z.common.data.StartTurnData.fromProtocol(startTurn);
  var tiles = goog.array.map(startTurnData.tiles, this.createOrUpdateTile, this);
  var e = new z.client.events.StartTurn({tiles:tiles});
  this.dispatchEvent(e);
};

/**
 * @param {!z.common.data.TileData} tileData
 */
z.client.WorldProxy.prototype.createOrUpdateTile = function (tileData) {
  var tile = this._repository.get(tileData.tileId);
  if (goog.isNull(tile)) {
    tile = this._entityFactory.createTile(tileData);
  } else {
    tile.update(tileData);
  }
  return tile;
};

z.client.WorldProxy.prototype.doEndTurn = function () {
  // TODO: signal end turn to world
  // TODO: send plan
//  this._world.commitPlan(this.actorId, plan ):
};