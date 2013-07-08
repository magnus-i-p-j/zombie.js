goog.provide('mugd.injector.MultipleProviderFoundException');

/**
 * @param {string} message
 * @constructor
 * @extends Error
 */
mugd.injector.MultipleProviderFoundException = function(message){
  goog.base(this, message);
  this.message = message;
  this.name = 'mugd.injector.MultipleProviderFoundException';
}

goog.inherits(mugd.injector.MultipleProviderFoundException, Error);