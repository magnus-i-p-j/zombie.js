goog.provide('z.common.rulebook.Terrain');

goog.require('z.common.rulebook');

/**
 * @param {z.common.rulebook.meta} terrain
 * @constructor
 */
z.common.rulebook.Terrain = function(terrain){
  /**
   * @type {z.common.rulebook.meta}
   * @private
   */
  this._terrain = terrain;
  /**
   * @type {string}
   */
  this.type = this._terrain.type;
  /**
   * @type {z.common.rulebook.category}
   */
  this.category = z.common.rulebook.category.TERRAIN;
  /**
   * @type {string}
   */
  this.name = this._terrain.name;
  /**
   * @type {string}
   */
  this.description = this._terrain.description;

};