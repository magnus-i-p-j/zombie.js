goog.provide('mugd.injector.NoProviderFoundException');

/**
 * @param {string} msg
 * @constructor
 * @extends Error
 */
mugd.injector.NoProviderFoundException = function(msg){
  goog.base(this, msg);
}

goog.inherits(mugd.injector.NoProviderFoundException, Error);