goog.provide('z.client.actions.CreateImprovement');

goog.require('z.client.Action');

/**
 * @param {!z.common.rulebook.Improvement} improvement
 * @extends {z.client.Action}
 * @constructor
 */
z.client.actions.CreateImprovement = function (improvement) {
  goog.base(this, improvement.name);
  this.improvement = improvement;
};
goog.inherits(z.client.actions.CreateImprovement, z.client.Action);

/**
 * @override
 */
z.client.actions.CreateImprovement.prototype._canExecuteInternal = function (args) {
  var target = args[z.client.action.ArgsType.TARGET];
  if (goog.isNull(target.entity) || target.entity.meta.category !== z.common.rulebook.category.TERRAIN) {
    return false;
  }
  return this.improvement.isApplicable(target.entity);
};

/**
 * @override
 */
z.client.actions.CreateImprovement.prototype._executeInternal = function (args) {
  var target = args[z.client.action.ArgsType.TARGET];
  console.log('Create a ' + this.improvement.name + ' at target (' + target.entity.position.x + ';' + target.entity.position.y + ')');
};

z.client.actions.CreateImprovement.prototype.args = [
  z.client.action.ArgsType.TARGET
];
