goog.provide('z.common.rulebook.Improvement');

goog.require('z.common.rulebook.logic');
goog.require('z.common.rulebook');

/**
 * @param {!z.common.rulebook.improvement} improvement
 * @constructor
 */
z.common.rulebook.Improvement = function (improvement) {
  /**
   * @type {!z.common.rulebook.improvement}
   * @private
   */
  this._improvement = improvement;

  /**
   * @type {string}
   */
  this.type = this._improvement.type;
  /**
   * @type {z.common.rulebook.category}
   */
  this.category = z.common.rulebook.category.IMPROVEMENT;
  /**
   * @type {string}
   */
  this.name = this._improvement.name;
  /**
   * @type {string}
   */
  this.description = this._improvement.description;
};

/**
 * @param {!z.common.entities.Entity} target
 * @return {boolean}
 */
z.common.rulebook.Improvement.prototype.isApplicable = function (target) {
  return goog.array.every(this.improvement['prerequisites'], function (item, key) {
    return z.common.rulebook.logic.prerequisites[key](item, target);
  });
};



