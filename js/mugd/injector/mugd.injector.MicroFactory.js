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
  var withRes = this._res[resource];
  try {
    var injRes = this.injector.getResource(resource);
  } catch (e) {
    if () { // TODO: catch No provider found for key: ' + key

    }
  }
};

/**
 * @returns {!mugd.injector.IInjectable}
 */
mugd.injector.MicroFactory.prototype.New = function () {
  return /** @type {!mugd.injector.IInjectable} */ new this.Ctor(this);
};

/**
 * @returns {!mugd.injector.MicroFactory}
 */
mugd.injector.MicroFactory.prototype.With = function () {

};
