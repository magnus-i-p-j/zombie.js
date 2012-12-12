goog.provide('z.client.ActionFactory');

/**
 * @param {!z.common.rulebook.Rulebook} rulebook
 * @constructor
 */
z.client.ActionFactory = function (rulebook) {
  this._rulebook = rulebook;
};

z.client.ActionFactory.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.RULEBOOK
];

/**
 * @param {z.common.rulebook.meta} meta
 * @return {z.client.Action[]}
 */
z.client.ActionFactory.prototype.getActions = function (meta) {
  return this._createActions(meta);
};

/**
 * @param {z.common.rulebook.meta} meta
 * @return {z.client.Action[]}
 */
z.client.ActionFactory.prototype._createActions = function (meta) {
  var actions = [];
  if (meta.category === z.common.rulebook.category.TERRAIN) {
    goog.array.forEach(this._rulebook.improvements, function (improvement) {
          actions.push(new z.client.actions.ActionCreateImprovement(improvement));
        }
    );
  }
//  else if (meta.category === z.common.rulebook.category.IMPROVEMENT) {
//    actions.push(new z.client.actions.ActionShowImprovement());
//  }
  return actions;
};
