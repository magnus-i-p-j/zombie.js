goog.provide('mugd.injector.MultipleProviderFoundException');

/**
 * @param {string} msg
 * @constructor
 * @extends Error
 */
mugd.injector.MultipleProviderFoundException = function(msg){
  goog.base(this, msg);
}

goog.inherits(mugd.injector.MultipleProviderFoundException, Error);