goog.provide('z.common.rulebook.Archetype');

goog.require('z.common.rulebook');

/**
 * @param {z.common.rulebook.archetype} meta
 * @constructor
 */
z.common.rulebook.Archetype = function(meta){
  /**
   * @type {z.common.rulebook.archetype}
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
  this.category = z.common.rulebook.category.ARCHETYPE;
  /**
   * @type {string}
   */
  this.name = this._meta.name;
  /**
   * @type {string}
   */
  this.description = this._meta.description;

  /**
   * @type {number}
   */
  this.frequency = this._meta.frequency;

};
