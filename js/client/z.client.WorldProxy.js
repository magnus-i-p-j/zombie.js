goog.provide('z.client.WorldProxy');

goog.require('goog.events.EventTarget');

goog.require('mugd.Injector');
goog.require('z.client');

/**
 * @param {string} url
 * @param {!Object} ruleset
 */
z.client.WorldProxy = function (url, ruleset) {
  goog.base(this);

  this.url = url;
};

goog.inherits(z.client.WorldProxy, goog.events.EventTarget);


z.client.WorldProxy.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.WORLD_URL,
  z.client.Resources.RULESET
];