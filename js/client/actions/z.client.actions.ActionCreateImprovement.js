goog.provide('z.client.actions.ActionCreateImprovement');

goog.require('z.ui.Action');

/**
 * @param {!z.rulebook.Improvement} improvement
 * @constructor
 */
z.client.actions.ActionCreateImprovement = function (improvement) {
  goog.base(this, improvement);

};
goog.inherits(z.client.actions.ActionCreateImprovement, z.ui.Action);

z.client.actions.ActionCreateImprovement.prototype.canExecute = function (target) {
  this.improvement.isApplicable(target);
};

z.client.actions.ActionCreateImprovement.prototype.execute = function (target) {
  if (!this.canExecute(target)) {
    throw {name:'Cannot execute action with the supplied target.'};
  }
  console.log('Create a ' + this.improvement.name + ' at target ' + target.id);

};


