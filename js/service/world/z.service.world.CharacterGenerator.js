goog.provide('z.service.world.CharacterGenerator');

goog.require('z.common.data.CharacterData');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.math');

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

  this._characterDataByArchetype = {};
  this._anyArchetypeCharacterData = [];

  goog.array.forEach(ruleset[z.common.rulebook.category.CHARACTER], function (data) {
    if (goog.isDefAndNotNull(data['archetype'])) {
      if (!this._characterDataByArchetype[data['archetype']]) {
        this._characterDataByArchetype[data['archetype']] = [];
      }
      this._characterDataByArchetype[data['archetype']].push(data);
    } else {
      this._anyArchetypeCharacterData.push(data);
    }
  }, this);

  goog.object.forEach(this._characterDataByArchetype, goog.array.shuffle);
  goog.array.shuffle(this._anyArchetypeCharacterData);
};

/**
 * @param {string} archetypeType
 * @param {!mugd.utils.guid} ownerId
 * @return {!z.common.entities.Character}
 */
z.service.world.CharacterGenerator.prototype.getCharacterByArchetype = function (archetypeType, ownerId) {
  var characterBase = null;
  if (this._characterDataByArchetype[archetypeType] && this._characterDataByArchetype[archetypeType].length) {
    characterBase = this._characterDataByArchetype[archetypeType].pop();
  } else if (this._anyArchetypeCharacterData.length) {
    characterBase = this._anyArchetypeCharacterData.pop();
  } else {
    throw "No more characters left";
  }

  var archetype = this._ruleBook.getMetaClass(archetypeType);
  console.log(archetypeType);
  console.log(archetype);
  var self = this;
  var characterData = new z.common.data.CharacterData(
    null,
    ownerId,
    z.common.protocol.state.MODIFIED,
    characterBase.name,
    characterBase.gender,
    this._addStatVariation(archetype.combat),
    this._addStatVariation(archetype.knowledge),
    this._addStatVariation(archetype.labour),
    1,
    goog.array.map(
      goog.array.filter(archetype.traits, function (/** @type {z.common.rulebook.possible_trait} */trait) {
          return trait.probability > Math.random();
        }
      ), function (/** @type {z.common.rulebook.possible_trait} */trait) {
        console.log(trait);
        return self._ruleBook.getMetaClass(trait.type);
      }
    )
  );
  console.log(characterData);
  return /** @type {!z.common.entities.Character} */ this._repository.put(characterData);
};

/**
 * @param {number} value
 * @private
 * @return {number}
 */
z.service.world.CharacterGenerator.prototype._addStatVariation = function (value) {
  return Math.max(0, goog.math.randomInt(this._statsVariation * 2 + 1) - this._statsVariation + value);
};
