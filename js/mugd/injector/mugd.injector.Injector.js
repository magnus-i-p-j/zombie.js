goog.provide('mugd.injector.Injector');

goog.require('mugd.injector.ServiceHolder');

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
      throw 'No provider found for key: ' + key;
    }
    resource = this.create(provider);
    this.addResource(key, resource);
  }
  return resource;
};

/**
 * Instantiates the given constructor resolving its dependencies.
 * @param {function(new:mugd.injector.IInjectable, !mugd.injector.ServiceHolder)} Ctor The constructor function to use.
 * @return {!Object} An instance of the constructor.
 */
mugd.injector.Injector.prototype.create = function (Ctor) {
  var services = new mugd.injector.ServiceHolder(this);
  return new Ctor(services);
};


/**
 * @const
 */
mugd.injector.Injector.INJECTOR = '$injector';
