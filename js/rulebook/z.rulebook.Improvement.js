goog.provide('z.rulebook.Improvement');

goog.require('z.rulebook.logic');

/**
 * @param {!z.rulebook.improvement} improvement
 * @constructor
 */
z.rulebook.Improvement = function (improvement) {
  this.improvement = improvement;
};

z.rulebook.Improvement.prototype.isApplicable = function (target) {
  return goog.array.every(this.improvement['prerequisites'], function (item, key) {
    return z.rulebook.logic.prerequisites[key](item, target);
  });
};



