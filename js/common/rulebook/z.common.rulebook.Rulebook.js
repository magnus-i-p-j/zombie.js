goog.provide("z.common.rulebook.Rulebook");

goog.require("z.common.rulebook");
goog.require("z.common.rulebook.Improvement");
goog.require("z.common.rulebook.Terrain");

goog.require('mugd.Injector');
goog.require('z.client');


z.common.rulebook.Rulebook = function (ruleset) {
  /**
   * @type {Object}
   * @private
   */
  this._meta = {};

  this.improvements = goog.array.map(ruleset[z.common.rulebook.category.IMPROVEMENT], function(item){
    var improvement = new z.common.rulebook.Improvement(item);
    this._meta[improvement.type] = improvement;
    return improvement;
  }, this);
  this.terrain = goog.array.map(ruleset[z.common.rulebook.category.TERRAIN], function(item){
    var terrain = new z.common.rulebook.Terrain(item);
    this._meta[terrain.type] = terrain;
    return terrain;
  }, this);
};

z.common.rulebook.Rulebook.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.RULESET
];

/**
 * @param {string} type
 * @return {z.common.rulebook.meta}
 */
z.common.rulebook.Rulebook.prototype.getMetaClass = function(type){
 return this._meta[type];
};
