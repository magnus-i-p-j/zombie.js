goog.provide('z.service.exceptions.InvalidQueryStringException');

goog.require('mugd.utils.Exception');

/**
 * @param {string} message
 * @param {string} queryString
 * @extends {mugd.utils.Exception}
 * @constructor
 */
z.service.exceptions.InvalidQueryStringException = function(message, queryString){
  goog.base(this, 'InvalidQueryStringException', message);
  /**
   * @type {string}
   */
  this.queryString = queryString;
}

goog.inherits(z.service.exceptions.InvalidQueryStringException, mugd.utils.Exception);
