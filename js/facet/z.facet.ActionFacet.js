goog.provide('z.facet.ActionFacet');

/**
 * @param {!z.ui.Action} action
 * @param {!z.entities.Entity} target
 * @constructor
 */
z.facet.ActionFacet = function (action, target) {
  this.canExecute = ko.computed(this._canExecute, this);
};

/**
 * @private
 */
z.facet.ActionFacet.prototype._canExecute = function () {
  return this.action.canExecute(this.target);
};

z.facet.ActionFacet.prototype.execute = function () {
  this.action.execute(this.target);
};
