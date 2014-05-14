goog.provide('z.common.rulebook.CharacterType');

goog.require('z.common.rulebook');

/**
 * @param {z.common.rulebook.meta} meta
 * @constructor
 */
z.common.rulebook.CharacterType = function(meta){
  /**
   * @type {z.common.rulebook.meta}
   * @private
   */
  this._meta = meta;
  /**
   * @type {string}
   */
  this.type = this._meta.type;
  /**
   * @type {z.common.rulebook.category}
   */
  this.category = z.common.rulebook.category.CHARACTER_TYPE;
  /**
   * @type {string}
   */
  this.name = this._meta.name;
  /**
   * @type {string}
   */
  this.description = this._meta.description;

};