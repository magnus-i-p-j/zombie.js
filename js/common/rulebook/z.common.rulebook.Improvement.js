goog.provide('z.common.rulebook.Improvement');

goog.require('z.common.rulebook.logic');

/**
 * @param {!z.common.rulebook.improvement} improvement
 * @constructor
 */
z.common.rulebook.Improvement = function (improvement) {
  this.improvement = improvement;
};

z.common.rulebook.Improvement.prototype.isApplicable = function (target) {
  return goog.array.every(this.improvement['prerequisites'], function (item, key) {
    return z.common.rulebook.logic.prerequisites[key](item, target);
  });
};



