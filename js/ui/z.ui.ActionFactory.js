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
  if (!this._actionDict[meta.type]) {
    this._actionDict[meta.type] = this._createActions(meta);
  }
  return this._actionDict[meta.type];
};

/**
 * @param {z.rulebook.meta} meta
 * @return {z.ui.Action[]}
 */
z.facet.ActionFactory.prototype._createActions = function (meta) {
  // TODO: finish <---- REALLY! DO THIS! FFS!

};

