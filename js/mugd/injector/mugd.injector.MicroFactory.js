goog.provide('mugd.injector.MicroFactory');

/**
 * @param {!mugd.injector.Injector} injector
 * @param {!function(new:mugd.injector.IInjectable, !mugd.injector.MicroFactory)} Ctor
 * @constructor
 */
mugd.injector.MicroFactory = function (injector, Ctor) {
  /**
   * @type {!mugd.injector.Injector}
   */
  this.injector = injector;

  /**
   * @type {!function(new:mugd.injector.IInjectable, !mugd.injector.MicroFactory)}
   */
  this.Ctor = Ctor;
};

/**
 * @param {string} resource
 * @returns {*}
 */
mugd.injector.MicroFactory.prototype.get = function (resource) {
  return this.injector.getResource(resource);
};

/**
 * @returns {!mugd.injector.IInjectable}
 */
mugd.injector.MicroFactory.prototype.New = function () {
  return /** @type {!mugd.injector.IInjectable} */ new this.Ctor(this);
};
