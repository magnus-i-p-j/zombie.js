goog.provide('mugd.injector.NoProviderFoundException');

/**
 * @param {string} message
 * @constructor
 * @extends Error
 */
mugd.injector.NoProviderFoundException = function (message) {
  goog.base(this, message);
  this.message = message;
  this.name = 'mugd.injector.NoProviderFoundException';
};

goog.inherits(mugd.injector.NoProviderFoundException, Error);