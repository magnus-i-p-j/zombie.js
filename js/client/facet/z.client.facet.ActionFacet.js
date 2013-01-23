goog.provide('z.client.facet.ActionFacet');

/**
 * @param {!z.client.Action} action
 * @param {!z.client.facet.EntityFacet} target
 * @constructor
 */
z.client.facet.ActionFacet = function (action, target) {
  this.action = action;
  /**
   * @expose
   * @type {function(z.client.facet.EntityFacet=): !z.client.facet.EntityFacet}
   */
  this.target = ko.observable(target);
  /**
   * @expose
   * @type {function(boolean=): boolean}
   */
  this.canExecute = ko.computed(this._canExecute, this);
};

/**
 * @private
 */
z.client.facet.ActionFacet.prototype._canExecute = function () {
  var target = this.target();
  return this.action.canExecute({target:target});

};

z.client.facet.ActionFacet.prototype.execute = function () {
  var target = this.target();
  this.action.execute({target:target});
};
