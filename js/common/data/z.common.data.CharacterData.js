goog.provide('z.common.data.CharacterData');

goog.require('z.common');
goog.require('z.common.data.EntityData');

/**
 * @implements {z.common.data.EntityData}
 * @param {?mugd.utils.guid} guid
 * @param {?mugd.utils.guid} ownerId
 * @param {!z.common.protocol.state} state
 * @param {string} name
 * @param {number} combat
 * @param {number} knowledge
 * @param {number} labour
 * @param {number} health
 * @param {Array.<string>} traits
 * @constructor
 */
z.common.data.CharacterData = function (guid, ownerId, state, name, combat, knowledge, labour, health, traits) {
  /**
   * @type {z.common.rulebook.category}
   */
  this.category = z.common.rulebook.category.CHARACTER;

  this.guid = guid;
  this.ownerId = ownerId;
  this.state = state;
  this.name = name;
  this.combat = combat;
  this.knowledge = knowledge;
  this.labour = labour;
  this.health = health;

  this.traits = traits;
};

/**
 * @param {!z.common.entities.Character} character
 * @return {!z.common.data.CharacterData}
 */
z.common.data.CharacterData.fromEntity = function (character) {
  return new z.common.data.CharacterData(
    character.guid,
    character.owner.guid,
    character.getState(),
    character.name,
    character.combat,
    character.knowledge,
    character.labour,
    character.health,
    character.traits
  );
};

/**
 * @param {!z.common.protocol.character} protocol
 * @return {!z.common.data.CharacterData}
 */
z.common.data.CharacterData.fromProtocol = function (protocol) {
  return new z.common.data.CharacterData(
  );
};

/**
 * @param {!z.common.entities.Character} character
 * @return {!z.common.protocol.character}
 */
z.common.data.CharacterData.toProtocol = function (character) {
  return {
  };
};