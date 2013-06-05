goog.provide('mugd.injector.ServiceHolder');

/**
 * @param {!mugd.injector.Injector} injector
 * @constructor
 */
mugd.injector.ServiceHolder = function (injector) {
  /**
   * @type {!mugd.injector.Injector}
   */
  this.injector = injector;
};

/**
 * @param {string} resource
 * @returns {*}
 */
mugd.injector.ServiceHolder.prototype.get = function (resource) {
  return this.injector.getResource(resource);
};

