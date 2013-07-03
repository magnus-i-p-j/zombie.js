goog.provide('z.client.ActionFactory');

goog.require('z.client.actions.CreateImprovement');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements {mugd.injector.IInjectable}
 */
z.client.ActionFactory = function (services) {
  /**
   * @type {!z.common.rulebook.Rulebook}
   * @private
   */
  this._rulebook = /** @type {!z.common.rulebook.Rulebook} */ services.get(z.common.Resources.RULEBOOK);

  this._injector = /** @type {!mugd.injector.Injector} */ services.get(z.common.Resources.INJECTOR);
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
    var factory = this._injector.Compose(z.client.actions.CreateImprovement);
    goog.array.forEach(this._rulebook.improvements, function (improvement) {
          actions.push(factory.With({'improvement': improvement}).New());
        }
    );
  }
//  else if (meta.category === z.common.rulebook.category.IMPROVEMENT) {
//    actions.push(new z.client.actions.ActionShowImprovement());
//  }
  return actions;
};

