goog.provide('mugd.injector.Injector');

goog.require('mugd.injector.MicroFactory');
goog.require('mugd.injector.NoProviderFoundException');

/**
 * @constructor
 */
mugd.injector.Injector = function () {

  /**
   * @type {!Object.<string, Function>}
   * @private
   */
  this._providers = {};

  /**
   * @type {!Object.<string, !*>}
   * @private
   */
  this._resources = {};

  this.addResource(mugd.injector.Injector.INJECTOR, this);
};

/**
 * Adds a resource provider.
 * @param {string} key
 * @param {Function} provider
 */
mugd.injector.Injector.prototype.addProvider = function (key, provider) {
  this._providers[key] = provider;
};

/**
 * Adds a resource.
 * @param {string} key
 * @param {*} resource
 */
mugd.injector.Injector.prototype.addResource = function (key, resource) {
  this._resources[key] = resource;
};

/**
 * Returns a resource by its key.
 * @param {string} key The key of the service to get.
 * @return {*} The service.
 */
mugd.injector.Injector.prototype.getResource = function (key) {
  var resource = this._resources[key];
  if (!resource) {
    var provider = this._providers[key];
    if (!provider) {
      throw new mugd.injector.NoProviderFoundException('No provider found for key: ' + key);
    }
    resource = this.Compose(provider).New();
    this.addResource(key, resource);
  }
  return resource;
};

/**
 * Instantiates the given constructor resolving its dependencies.
 * @param {function(new:mugd.injector.IInjectable, !mugd.injector.MicroFactory)} Ctor The constructor function to use.
 * @return {!Object} An instance of the constructor.
 * @deprecated
 */
mugd.injector.Injector.prototype.create = function (Ctor) {
  var mf = new mugd.injector.MicroFactory(this, Ctor);
  return mf.New();
};

/**
 * Creates a MicroFactory for the given constructor
 * @param {function(new:mugd.injector.IInjectable, !mugd.injector.MicroFactory)} Ctor The constructor function to use.
 * @return {!mugd.injector.MicroFactory} An instance of the factory.
 */
mugd.injector.Injector.prototype.Compose = function (Ctor) {
  return new mugd.injector.MicroFactory(this, Ctor);
};


/**
 * @const
 */
mugd.injector.Injector.INJECTOR = '$injector';
