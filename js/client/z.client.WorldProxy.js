goog.provide('z.client.WorldProxy');
goog.require('mugd.Injector');
goog.require('z.client');

/**
 * @param {string} url
 * @param {!Object} ruleset
 */
z.client.WorldProxy = function (url, ruleset) {
  this.url = url;
};

z.client.WorldProxy.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.WORLD_URL,
  z.client.Resources.RULESET
];