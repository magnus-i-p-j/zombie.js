goog.provide('z.client.facet.ActionFactory');

/**
 * @param {!z.common.rulebook.Rulebook} rulebook
 * @constructor
 */
z.client.facet.ActionFactory = function (rulebook) {
  this._actionDict = {};
  this._rulebook = rulebook;
};

/**
 * @param {z.common.rulebook.meta} meta
 * @return {z.ui.Action[]}
 */
z.client.facet.ActionFactory.prototype.getActions = function (meta) {
  return this._createActions(meta);
};

/**
 * @param {z.common.rulebook.meta} meta
 * @return {z.ui.Action[]}
 */
z.client.facet.ActionFactory.prototype._createActions = function (meta) {
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

