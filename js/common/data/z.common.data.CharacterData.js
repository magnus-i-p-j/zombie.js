goog.provide('z.common.data.CharacterData');

goog.require('z.common');
goog.require('z.common.data.EntityData');

/**
 * @constructor
 * @implements {z.common.data.EntityData}
 */
z.common.data.CharacterData = function () {
  /**
   * @type {z.common.rulebook.category}
   */
  this.category = z.common.rulebook.category.CHARACTER;
};

/**
 * @param {!z.common.entities.Character} character
 * @return {!z.common.data.CharacterData}
 */
z.common.data.CharacterData.fromEntity = function (character) {
  return new z.common.data.CharacterData(
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