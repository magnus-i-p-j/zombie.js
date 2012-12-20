goog.provide('mugd.Injector');

/**
 * @constructor
 */
mugd.Injector = function () {

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

  this.addResource(mugd.Injector.INJECTOR, this);
};

/**
 * Adds a resource provider.
 * @param {string} key
 * @param {Function} provider
 */
mugd.Injector.prototype.addProvider = function (key, provider) {
  this._providers[key] = provider;
};

/**
 * Adds a resource.
 * @param {string} key
 * @param {*} resource
 */
mugd.Injector.prototype.addResource = function (key, resource) {
  this._resources[key] = resource;
};

/**
 * Returns a resource by its key.
 * @param {string} key The key of the service to get.
 * @return {*} The service.
 */
mugd.Injector.prototype.getResource = function (key) {
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
 * @param {Function} ctor The constructor function to use.
 * @return {!Object} An instance of the constructor.
 */
mugd.Injector.prototype.create = function (ctor) {
  /**
   * @constructor
   */
  var Dependant = function () {
  };
  Dependant.prototype = ctor.prototype;
  var instance = new Dependant();

  this._inject(ctor, instance);

  return instance;
};

/**
 * Injects dependencies to a constructor in the context of the given instance.
 * @param {Function} ctor The constructor function to use.
 * @param {!Object} instance The instance to use.
 * @private
 */
mugd.Injector.prototype._inject = function (ctor, instance) {
  var keys = ctor.prototype[mugd.Injector.DEPS];
  if (!goog.isArray(keys)) {
    console.log(ctor);
    throw 'No dependencies declared.';
  }
  var deps = keys.map(this.getResource, this);

  ctor.apply(instance, deps);
};

/**
 * @const
  */
mugd.Injector.INJECTOR = '$injector';
/**
 * @const
  */
mugd.Injector.DEPS = '$deps';