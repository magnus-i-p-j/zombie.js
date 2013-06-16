goog.provide('mugd.injector.MicroFactory');

goog.require('mugd.injector.MultipleProviderFoundException');
goog.require('mugd.injector.NoProviderFoundException');

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

  /**
   * @type {!Object}
   * @private
   */
  this._res = {};

};

/**
 * @param {string} key
 * @returns {*}
 */
mugd.injector.MicroFactory.prototype.get = function (key) {

  var withRes = this._res[key];
  try {
    var injRes = this.injector.getResource(key);
  } catch (e) {
    if (!(e instanceof mugd.injector.NoProviderFoundException)) {
      throw e;
    }else if(!goog.isDefAndNotNull(withRes)){
      throw e;
    }
  }

  if(goog.isDefAndNotNull(withRes) && goog.isDefAndNotNull(injRes)){
    throw new mugd.injector.MultipleProviderFoundException('Multiple providers found for key' + key);
  }

  var resource;
  if(goog.isDefAndNotNull(withRes)){
    resource = withRes;
  }else{
    resource = injRes;
  }

  return resource;
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
mugd.injector.MicroFactory.prototype.With = function (res) {
  var next = new mugd.injector.MicroFactory(this.injector, this.Ctor);
  next._res = res;
  return next;
};
