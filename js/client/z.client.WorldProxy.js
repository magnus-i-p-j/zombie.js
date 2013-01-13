goog.provide('z.client.WorldProxy');

goog.require('goog.events.EventTarget');

goog.require('mugd.Injector');
goog.require('z.client');
goog.require('z.service.world.World');
goog.require('z.client.events.StartTurn');
goog.require('z.service.world.RandomTerrainGenerator');
goog.require('goog.array');

/**
 * @param {string} url
 * @param {!Object} ruleset
 * @param {!z.common.EntityFactory} entityFactory
 * @param {!z.common.EntityRepository} repository
 * @extends {goog.events.EventTarget}
 * @constructor
 */
z.client.WorldProxy = function (url, ruleset, entityFactory, repository) {
  goog.base(this);
  this._url = url;
  this._world = new z.service.world.World(ruleset, new z.service.world.RandomTerrainGenerator('QWERTYUIOP'));
  this._entityFactory = entityFactory;
  this._repository = repository;
  this._actorId = null;
};

goog.inherits(z.client.WorldProxy, goog.events.EventTarget);

z.client.WorldProxy.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.WORLD_URL,
  z.client.Resources.RULESET,
  z.client.Resources.ENTITY_FACTORY,
  z.client.Resources.REPOSITORY
];

z.client.WorldProxy.prototype.firstTurn = function () {
  this._actorId = this._world.createActor(
      goog.bind(this.doStartTurn, this)
  );
};

/**
 * @param {!z.common.data.StartTurnData} startTurn
 */
z.client.WorldProxy.prototype.doStartTurn = function (startTurn) {
  var tiles = goog.array.map(startTurn.tiles, this.createOrUpdateTile, this);
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