goog.provide('mugd.utils.Exception');

/**
 * @param {string}  name
 * @param {string} message
 * @constructor
 * @extends Error
 */
mugd.utils.Exception = function(name, message){
  goog.base(this, message);
  this.message = message;
  this.name = name;
}

goog.inherits(mugd.utils.Exception, Error);
