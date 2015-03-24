goog.provide('z.common.data.CharacterData');

goog.require('z.common');

goog.require('z.common.data.EntityData');
goog.require('goog.object');
/**
 * @implements {z.common.data.EntityData}
 * @param {?mugd.utils.guid} guid
 * @param {?mugd.utils.guid} ownerId
 * @param {!z.common.protocol.state} state
 * @param {string} name
 * @param {string} gender
 * @param {number} combat
 * @param {number} knowledge
 * @param {number} labour
 * @param {number} health
 * @param {?mugd.utils.guid} assignedTo
 * @param {Array.<string>} traits
 * @constructor
 */
z.common.data.CharacterData = function (guid, ownerId, state, name, gender, combat, knowledge, labour, health, assignedTo, traits) {
  /**
   * @type {z.common.rulebook.category}
   */
  this.category = z.common.rulebook.category.CHARACTER;

  this.guid = guid;
  this.ownerId = ownerId;
  this.state = state;
  this.name = name;
  this.gender = gender;
  this.type = gender;
  this.combat = combat;
  this.knowledge = knowledge;
  this.labour = labour;
  this.health = health;
  this.assignedTo = assignedTo;

  this.traits = traits;
};

/**
 * @param {!z.common.entities.Character} character
 * @return {!z.common.data.CharacterData}
 */
z.common.data.CharacterData.fromEntity = function (character) {
  return new z.common.data.CharacterData(
    character.guid,
    character.owner,
    character.getState(),
    character.name,
    character.gender,
    character.combat,
    character.knowledge,
    character.labour,
    character.health,
    character.assignedTo,
    goog.object.getKeys(character.traits)
  );
};