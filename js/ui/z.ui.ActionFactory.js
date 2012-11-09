goog.provide('z.facet.ActionFactory');

/**
 * @param {!z.rulebook.Rulebook} rulebook
 * @constructor
 */
z.facet.ActionFactory = function (rulebook) {
  this._actionDict = {};
  this._rulebook = rulebook;
};

/**
 * @param {z.rulebook.meta} meta
 * @return {z.ui.Action[]}
 */
z.facet.ActionFactory.prototype.getActions = function (meta) {
  return this._createActions(meta);
};

/**
 * @param {z.rulebook.meta} meta
 * @return {z.ui.Action[]}
 */
z.facet.ActionFactory.prototype._createActions = function (meta) {
  var actions = [];
  if (meta.category === z.rulebook.category.TERRAIN) {
    goog.array.forEach(this._rulebook.improvements, function (improvement) {
          actions.push(new z.client.actions.ActionCreateImprovement(improvement));
        }
    );
  }
//  else if (meta.category === z.rulebook.category.IMPROVEMENT) {
//    actions.push(new z.client.actions.ActionShowImprovement());
//  }
  return actions;
};

