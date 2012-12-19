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
z.client.actions.CreateImprovement.prototype.canExecute = function (target) {
  if(target.entity){
    /**
     * @type {!z.common.entities.Entity}
     */
    var entity = target.entity;
    return this.improvement.isApplicable(entity);
  }
  return false;
};

/**
 * @override
 */
z.client.actions.CreateImprovement.prototype.execute = function (target) {
  if (!this.canExecute(target)) {
    throw {name:'Cannot execute action with the supplied target.'};
  }
  console.log('Create a ' + this.improvement.name + ' at target (' + target.entity.x + ';' + target.entity.y + ')');

};


