goog.provide('z.client.WorldProxy');

goog.require('goog.events.EventTarget');

goog.require('mugd.Injector');
goog.require('z.client');
goog.require('z.service.World');

/**
 * @param {string} url
 * @param {!Object} ruleset
 */
z.client.WorldProxy = function (url, ruleset) {
  goog.base(this);

  this.url = url;
  this._world = new z.service.World();
};

goog.inherits(z.client.WorldProxy, goog.events.EventTarget);

z.client.WorldProxy.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.WORLD_URL,
  z.client.Resources.RULESET
];

z.client.WorldProxy.prototype.tempEndTurn = function () {
  // TODO; make this sane
  this._world.generateTiles();
  var tiles = this._world.tiles;

};