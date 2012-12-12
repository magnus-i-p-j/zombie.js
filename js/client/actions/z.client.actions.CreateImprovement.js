goog.provide('z.client.actions.CreateImprovement');

goog.require('z.client.Action');

/**
 * @param {!z.common.rulebook.Improvement} improvement
 * @constructor
 */
z.client.actions.CreateImprovement = function (improvement) {
  goog.base(this, improvement);
  this.improvement = improvement;
};
goog.inherits(z.client.actions.CreateImprovement, z.client.Action);

z.client.actions.CreateImprovement.prototype.canExecute = function (target) {
  this.improvement.isApplicable(target);
};

z.client.actions.CreateImprovement.prototype.execute = function (target) {
  if (!this.canExecute(target)) {
    throw {name:'Cannot execute action with the supplied target.'};
  }
  console.log('Create a ' + this.improvement.name + ' at target ' + target.id);

};


