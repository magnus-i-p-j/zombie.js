goog.provide('z.client.facet.ActionFacet');

/**
 * @param {!z.client.Action} action
 * @param {!z.client.facet.EntityFacet} target
 * @constructor
 */
z.client.facet.ActionFacet = function (action, target) {
  this.action = action;
  /**
   * @type {function(z.client.facet.EntityFacet=): !z.client.facet.EntityFacet}
   */
  this.target = ko.observable(target);
  this.canExecute = ko.computed(this._canExecute, this);
};

/**
 * @private
 */
z.client.facet.ActionFacet.prototype._canExecute = function () {
  var target = this.target();
  if(goog.isNull(target)){
    return false;
  }
  return this.action.canExecute(target);

};

z.client.facet.ActionFacet.prototype.execute = function () {
  this.action.execute(this.target());
};
