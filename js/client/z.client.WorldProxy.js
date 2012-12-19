goog.provide('z.client.WorldProxy');

goog.require('goog.events.EventTarget');

goog.require('mugd.Injector');
goog.require('z.client');
goog.require('z.service.World');
goog.require('z.client.events.StartTurn');

/**
 * @param {string} url
 * @param {!Object} ruleset
 * @constructor
 * @extends {goog.events.EventTarget}
 */
z.client.WorldProxy = function (url, ruleset) {
  goog.base(this);

  this.url = url;
  this._world = new z.service.World(ruleset);
};

goog.inherits(z.client.WorldProxy, goog.events.EventTarget);

z.client.WorldProxy.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.WORLD_URL,
  z.client.Resources.RULESET
];

z.client.WorldProxy.prototype.tempEndTurn = function () {
  // TODO; make this sane
  var tiles = this._world.tiles;
  var e = new z.client.events.StartTurn({tiles:tiles});
  this.dispatchEvent(e);
};