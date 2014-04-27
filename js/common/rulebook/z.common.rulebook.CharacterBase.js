goog.provide('z.common.rulebook.CharacterBase');

goog.require('goog.array');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.common.rulebook.CharacterBase = function (services) {
  /**
   * @type {!Object}
   */
  var ruleset = /** @type {!Object} */services.get(z.common.Resources.RULESET);

  this._archetypeData = {};
  this._anyArchetypeData = [];

  goog.array.forEach(ruleset[z.common.rulebook.category.CHARACTER], function (data) {
    if (goog.isDefAndNotNull(data['archetype'])) {
      if (!this._archetypeData[data['archetype']]) {
        this._archetypeData[data['archetype']] = [];
      }
      this._archetypeData[data['archetype']].push(data);
    } else {
      this._anyArchetypeData.push(data);
    }
  }, this);


};

/**
 * @param {string} archetypeType
 */
z.common.rulebook.CharacterBase.prototype.getNewArchetypeBase = function (archetypeType) {

};