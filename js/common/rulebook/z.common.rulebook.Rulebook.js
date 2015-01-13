goog.provide("z.common.rulebook.Rulebook");

goog.require("z.common.rulebook");
goog.require("z.common.rulebook.Project");
goog.require("z.common.rulebook.Terrain");
goog.require("z.common.rulebook.Actor");
goog.require("z.common.rulebook.Tile");
goog.require("z.common.rulebook.Trait");
goog.require("z.common.rulebook.CharacterType");
goog.require("z.common.rulebook.Archetype");
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

  this.projects = this._parseCategoryData(ruleset[z.common.rulebook.category.PROJECT], z.common.rulebook.Project);
  this.terrain = this._parseCategoryData(ruleset[z.common.rulebook.category.TERRAIN], z.common.rulebook.Terrain);
  this.actors = this._parseCategoryData(ruleset[z.common.rulebook.category.ACTOR], z.common.rulebook.Actor);
  this.stockpiledResources = this._parseCategoryData(ruleset[z.common.rulebook.category.STOCKPILE], z.common.rulebook.StockpiledResource);
  this.tiles = this._parseCategoryData(ruleset[z.common.rulebook.category.TILE], z.common.rulebook.Tile);
  this.archetypes = this._parseCategoryData(ruleset[z.common.rulebook.category.ARCHETYPE], z.common.rulebook.Archetype);
  this.traits = this._parseCategoryData(ruleset[z.common.rulebook.category.TRAIT], z.common.rulebook.Trait);
  this.characterTypes = this._parseCategoryData(ruleset[z.common.rulebook.category.CHARACTER_TYPE], z.common.rulebook.CharacterType);
  this.gameStartingData = new z.common.rulebook.GameStartingData(ruleset);
  this.year = ruleset[z.common.rulebook.category.BOUNDS]['year'];
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