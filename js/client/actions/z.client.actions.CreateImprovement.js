goog.provide('z.client.actions.CreateImprovement');

goog.require('z.client.action.Action');
goog.require('goog.debug.Logger');

/**
 * @param {!z.common.rulebook.Improvement} improvement
 * @extends {z.client.action.Action}
 * @constructor
 */
z.client.actions.CreateImprovement = function (improvement) {
  goog.base(this, improvement.name);
  this.improvement = improvement;

  this.meta = {
    type: 'action_create_improvement' + improvement.type,
    category: z.common.rulebook.category.ACTION,
    name: improvement.name,
    description: 'Start doing the following: ' + improvement.description
  };

};
goog.inherits(z.client.actions.CreateImprovement, z.client.action.Action);

/**
 * @type {!goog.debug.Logger}
 * @protected
 */
z.client.actions.CreateImprovement.prototype._logger = goog.debug.Logger.getLogger('z.client.actions.CreateImprovement');

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
  this._logger.info('Create a ' + this.improvement.name + ' at target (' + target.entity.position.x + ';' + target.entity.position.y + ')');
};

z.client.actions.CreateImprovement.prototype.args = [
  z.client.action.ArgsType.TARGET
];
