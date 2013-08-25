goog.provide("z.common.rulebook.Rulebook");

goog.require("z.common.rulebook");
goog.require("z.common.rulebook.Improvement");
goog.require("z.common.rulebook.Terrain");
goog.require("z.common.rulebook.Actor");
goog.require("z.common.rulebook.StockpiledResource");
goog.require("z.common.rulebook.GameStartingData");

goog.require('mugd.injector.Injector');
goog.require('z.client');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.common.rulebook.Rulebook = function (services) {

  /**
   * @type {!Object}
   */
  var ruleset = /** @type {!Object} */services.get(z.common.Resources.RULESET);
  /**
   * @type {Object}
   * @private
   */
  this._meta = {};

  this.improvements = this._parseCategoryData(ruleset[z.common.rulebook.category.IMPROVEMENT], z.common.rulebook.Improvement);
  this.terrain = this._parseCategoryData(ruleset[z.common.rulebook.category.TERRAIN], z.common.rulebook.Terrain);
  this.actors = this._parseCategoryData(ruleset[z.common.rulebook.category.ACTOR], z.common.rulebook.Actor);
  this.stockpiledResources = this._parseCategoryData(ruleset[z.common.rulebook.category.STOCKPILE], z.common.rulebook.StockpiledResource);

  this.gameStartingData = new z.common.rulebook.GameStartingData(ruleset);

};

/**
 * @param {string} type
 * @return {!z.common.rulebook.meta}
 */
z.common.rulebook.Rulebook.prototype.getMetaClass = function (type) {
  var meta = this._meta[type];
  if (goog.isDefAndNotNull(meta)) {
    return  meta;
  } else {
    throw 'type: ' + type + ' has no meta class';
  }
};

z.common.rulebook.Rulebook.prototype._parseCategoryData = function (categoryData, CategoryClass) {
  return goog.array.map(categoryData, function (item) {
    var categoryInstance = new CategoryClass(item);
    this._meta[categoryInstance.type] = categoryInstance;
    return categoryInstance;
  }, this);
};