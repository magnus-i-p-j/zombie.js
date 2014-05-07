goog.provide('z.service.world.CharacterGenerator.');

goog.require('z.common.data.CharacterData');
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


  /**
   * @type {!z.common.rulebook.Rulebook}
   */
  this._ruleBook = /** @type {!z.common.rulebook.Rulebook} */services.get(z.common.Resources.RULEBOOK);

  /**
   * @type {!z.common.EntityRepository}
   */
  this._repository = /** @type {!z.common.EntityRepository} */services.get(z.common.Resources.REPOSITORY);

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
 * @return {!z.common.entities.Character}
 */
z.service.world.CharacterGenerator.prototype.getCharacterByArchetype = function (archetypeType) {
  var archetypeBase = null;
  if (this._archetypeData[archetypeType] && this._archetypeData[archetypeType].length) {
    archetypeBase = this._archetypeData[archetypeType].pop();
  } else if (this._anyArchetypeData.length) {
    archetypeBase = this._anyArchetypeData.pop();
  } else {
    throw "No more characters left";
  }

  var self = this;

  var characterData = new z.common.data.CharacterData(
    null,
    z.common.protocol.state.MODIFIED,
    archetypeBase.name,
    this._addStatVariation(archetypeBase.combat),
    this._addStatVariation(archetypeBase.knowledge),
    this._addStatVariation(archetypeBase.labour),
    1,
    goog.array.map(
      goog.array.filter(archetypeBase.traits, function (/** @type {z.common.rulebook.possible_trait} */trait) {
          return trait.probability > Math.random();
        }
      ), function (/** @type {z.common.rulebook.possible_trait} */trait) {
        return self._ruleBook.getMetaClass(trait.type);
      }
    )
  );

  return /** @type {!z.common.entities.Character} */ this._repository.put(characterData);
};

/**
 * @param {number} value
 * @private
 * @return {number}
 */
z.service.world.CharacterGenerator.prototype._addStatVariation = function (value) {
  return Math.max(0, goog.math.randInt(this._statsVariation * 2 + 1) - this._statsVariation + value);
};
