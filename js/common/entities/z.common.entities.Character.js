goog.provide('z.common.entities.Character');

goog.require('goog.array');
goog.require('goog.object');
goog.require('z.common.entities.Entity');


/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.common.entities.Entity}
 * @constructor
 */
z.common.entities.Character = function (services) {
  goog.base(this, services);

  /**
   * @type {!z.common.data.CharacterData}
   */
  var characterData = /** @type {!z.common.data.CharacterData} */ services.get('entityData');

  this.name = characterData.name;
  this.gender = characterData.gender;
  this.combat = characterData.combat;
  this.knowledge = characterData.knowledge;
  this.labour = characterData.labour;
  this.health = characterData.health;
  this.assignedTo = characterData.assignedTo;

  this.traits = this._parseTraits(characterData);
};

goog.inherits(z.common.entities.Character, z.common.entities.Entity);

/**
 * @inheritDoc
 */
z.common.entities.Character.prototype._update = function (entityData, meta, owner) {
  var updated = false;
  if (goog.isNull(entityData)) {
    // pass
  } else if (!(entityData instanceof z.common.data.CharacterData)) {
    throw {'name': 'InvalidDataException', 'message': 'not a z.common.data.CharacterData'};
  } else {
    /**
     * @type {!z.common.data.CharacterData}
     */
    var characterData = /** @type {!z.common.data.CharacterData} */ entityData;
    if (this.name !== characterData.name) {
      this.name = characterData.name;
      updated = true;
    }

    if (this.combat !== characterData.combat) {
      this.combat = characterData.combat;
      updated = true;
    }
    if (this.knowledge !== characterData.knowledge) {
      this.knowledge = characterData.knowledge;
      updated = true;
    }
    if (this.labour !== characterData.labour) {
      this.labour = characterData.labour;
      updated = true;
    }
    if (this.health !== characterData.health) {
      this.health = characterData.health;
      updated = true;
    }
    if(this.assignedTo !== characterData.assignedTo){
      this.assignedTo = characterData.assignedTo;
      updated = true;
    }

    var newTraits = this._parseTraits(characterData);
    var hasNewTraits = !goog.object.every(newTraits, function (element) {
      var trait = /** @type{z.common.rulebook.Trait} */ element;
      return this.hasTrait(trait);
    }, this);
    var hasLostTraits = !goog.object.every(this.traits, function (element) {
      var trait = /** @type{z.common.rulebook.Trait} */ element;
      return newTraits[trait.type];
    }, this);
    if (hasNewTraits || hasLostTraits) {
      this.traits = newTraits;
      updated = true;
    }
  }

  return updated;
};

z.common.entities.Character.prototype._parseTraits = function (characterData) {
  var traits = {};

  goog.array.forEach(characterData.traits, function (element) {
    var trait = /** @type{z.common.rulebook.Trait} */ element;
    traits[trait.type] = trait;
  }, this);
  return traits;
};

/**
 * @param {z.common.rulebook.Trait} trait
 */
z.common.entities.Character.prototype.hasTrait = function (trait) {
  return this.traits[trait.type];
};

/**
 * @param guid {!mugd.utils.guid}
 */
z.common.entities.Character.prototype.entityKilled = function(guid) {
  if(guid === this.assignedTo) {
    this.assignTo(null);
  }
};


/**
 * @param {?mugd.utils.guid} guid
 */
z.common.entities.Character.prototype.assignTo = function (guid) {
  if(this.assignedTo !== guid){
    this.assignedTo = guid;
    this._dispatchModified();
  }
};