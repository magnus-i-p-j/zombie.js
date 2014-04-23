goog.provide('z.common.rulebook.Trait');

goog.require('z.common.rulebook');

/**
 * @param {z.common.rulebook.meta} trait
 * @constructor
 */
z.common.rulebook.Trait = function(trait){
  /**
   * @type {z.common.rulebook.meta}
   * @private
   */
  this._trait = trait;
  /**
   * @type {string}
   */
  this.type = this._trait.type;
  /**
   * @type {z.common.rulebook.category}
   */
  this.category = z.common.rulebook.category.TRAIT;
  /**
   * @type {string}
   */
  this.name = this._trait.name;
  /**
   * @type {string}
   */
  this.description = this._trait.description;


};