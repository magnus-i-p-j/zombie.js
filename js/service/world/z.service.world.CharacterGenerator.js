goog.provide('z.service.world.CharacterGenerator.');

goog.require('goog.array');
goog.require('goog.object');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.service.world.CharacterGenerator = function (services) {
  this._statsVariation = 3;
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

  goog.object.forEach(this._archetypeData, goog.array.shuffle);
  goog.array.shuffle(this._anyArchetypeData);
};

/**
 * @param {string} archetypeType
 * @return {z.common.rulebook.character_base}
 */
z.service.world.CharacterGenerator.prototype.getCharacterByArchetype = function (archetypeType) {
  var archetypeBase = null;
  if(this._archetypeData[archetypeType] && this._archetypeData[archetypeType].length){
    archetypeBase = this._archetypeData[archetypeType].pop();
  }else if(this._anyArchetypeData.length){
    archetypeBase = this._anyArchetypeData.pop();
  }else{
    throw "No more characters left";
  }


};