goog.provide('z.client.facet.ActionFacet');

/**
 * @param {!z.ui.Action} action
 * @param {!z.common.entities.Entity} target
 * @constructor
 */
z.client.facet.ActionFacet = function (action, target) {
  this.canExecute = ko.computed(this._canExecute, this);
};

/**
 * @private
 */
z.client.facet.ActionFacet.prototype._canExecute = function () {
  return this.action.canExecute(this.target);
};

z.client.facet.ActionFacet.prototype.execute = function () {
  this.action.execute(this.target);
};
