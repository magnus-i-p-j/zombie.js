goog.provide('z.client.facet.ActionFacet');

/**
 * @param {!z.client.Action} action
 * @constructor
 */
z.client.facet.ActionFacet = function (action) {
  this.action = action;
  /**
   * @expose
   * @type {function(z.client.facet.EntityFacet=): !z.client.facet.EntityFacet}
   */
  this.target = ko.observable();
  this.targetIsSatisfied = ko.observable(false);
  this.targetIsNeeded = ko.observable(false);

  /**
   * @expose
   * @type {function(boolean=): boolean}
   */
  this.canExecute = ko.computed(this._canExecute, this);
};

z.client.facet.ActionFacet.prototype[mugd.Injector.DEPS] = [
];

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
