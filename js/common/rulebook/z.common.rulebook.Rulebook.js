goog.provide("z.common.rulebook.Rulebook");

goog.require("z.common.rulebook");
goog.require("z.common.rulebook.Improvement");
goog.require("z.common.rulebook.Terrain");
goog.require("z.common.rulebook.Actor");

goog.require('mugd.injector.Injector');
goog.require('z.client');

/**
 * @param {!mugd.injector.ServiceHolder} services
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.common.rulebook.Rulebook = function (services) {

  /**
   * @type {!Object}
   */
  var ruleset = /** @type {!Object} */services.get(z.client.Resources.RULESET);
  /**
   * @type {Object}
   * @private
   */
  this._meta = {};

  this.improvements = goog.array.map(ruleset[z.common.rulebook.category.IMPROVEMENT], function (item) {
    var improvement = new z.common.rulebook.Improvement(item);
    this._meta[improvement.type] = improvement;
    return improvement;
  }, this);
  this.terrain = goog.array.map(ruleset[z.common.rulebook.category.TERRAIN], function (item) {
    var terrain = new z.common.rulebook.Terrain(item);
    this._meta[terrain.type] = terrain;
    return terrain;
  }, this);
  this.actors = goog.array.map(ruleset[z.common.rulebook.category.ACTOR], function (item) {
    var meta = new z.common.rulebook.Actor(item);
    this._meta[meta.type] = meta;
    return meta;
  }, this);
};

/**
 * @param {string} type
 * @return {!z.common.rulebook.meta}
 */
z.common.rulebook.Rulebook.prototype.getMetaClass = function (type) {
  return this._meta[type];
};
