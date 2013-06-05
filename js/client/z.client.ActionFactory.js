goog.provide('z.client.ActionFactory');

goog.require('z.client.actions.CreateImprovement');

/**
 * @param {!mugd.injector.ServiceHolder} services
 * @constructor
 * @implements {mugd.injector.IInjectable}
 */
z.client.ActionFactory = function (services) {
  /**
   * @type {!z.common.rulebook.Rulebook}
   * @private
   */
  this._rulebook = services.get(z.client.Resources.RULEBOOK);
};

/**
 * @param {z.common.rulebook.meta} meta
 * @return {Array.<!z.client.action.Action>}
 */
z.client.ActionFactory.prototype.getActions = function (meta) {
  return this._createActions(meta);
};

/**
 * @param {z.common.rulebook.meta} meta
 * @return {Array.<!z.client.action.Action>}
 */
z.client.ActionFactory.prototype._createActions = function (meta) {
  var actions = [];
  if (meta.category === z.common.rulebook.category.TERRAIN) {
    goog.array.forEach(this._rulebook.improvements, function (improvement) {
          actions.push(new z.client.actions.CreateImprovement(improvement));
        }
    );
  }
//  else if (meta.category === z.common.rulebook.category.IMPROVEMENT) {
//    actions.push(new z.client.actions.ActionShowImprovement());
//  }
  return actions;
};

