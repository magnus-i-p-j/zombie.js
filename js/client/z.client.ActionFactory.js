goog.provide('z.client.ActionFactory');

goog.require('z.client.actions.CreateProject');

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
 * @param {Array.<!z.common.rulebook.meta>} metas
 * @return {Array.<!z.client.action.Action>}
 */
z.client.ActionFactory.prototype.getActions = function (metas) {
  return this._createActions(metas);
};

/**
 * @param {Array.<!z.common.rulebook.meta>} metas
 * @return {Array.<!z.client.action.Action>}
 */
z.client.ActionFactory.prototype._createActions = function (metas) {
  var actions = [];
  if (this._hasCategory(metas, z.common.rulebook.category.TERRAIN)) {
    var factory = this._injector.Compose(z.client.actions.CreateProject);
    goog.array.forEach(this._rulebook.projects, function (project) {
          actions.push(factory.With({'current_project': project}).New());
        }
    );
  }
//  else if (meta.category === z.common.rulebook.category.PROJECT) {
//    actions.push(new z.client.actions.ActionShowProject());
//  }
  return actions;
};

/**
 * @param {Array.<!z.common.rulebook.meta>} metas
 * @param {z.common.rulebook.category} category
 * @private
 */
z.client.ActionFactory.prototype._hasCategory = function (metas, category) {
  return goog.array.some(metas, function(meta){ return meta.category === category; });
};