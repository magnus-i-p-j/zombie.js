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
 * @param {!z.client.events.Args} args
 * @return {boolean}
 */
z.client.actions.CreateImprovement.prototype.canExecute = function (args) {
  var target = args.target;
  if (goog.isNull(target.entity) || target.entity.meta.category !== z.common.rulebook.category.TERRAIN) {
    return false;
  }
  return this.improvement.isApplicable(target.entity);
};

/**
 * @param {!z.client.events.Args} args
 */
z.client.actions.CreateImprovement.prototype.execute = function (args) {
  if (!this.canExecute(target)) {
    throw {name:'Cannot execute action with the supplied target.'};
  }

  console.log('Create a ' + this.improvement.name + ' at target (' + target.entity.position.x + ';' + target.entity.position.y + ')');

};


