goog.provide('z.client.facet.ActionFacet');

goog.require('goog.array');

/**
 * @param {!z.client.Action} action
 * @constructor
 */
z.client.facet.ActionFacet = function (action) {
  this.action = action;

  goog.array.forEach(this.action.args, function (item) {
    this[item] = ko.observable();
  }, this);

  /**
   * @expose
   * @type {function(boolean=): boolean}
   */
  this.canExecute = ko.computed(this._canExecute, this);
};

/**
 * @return {!z.client.action.Args}
 * @private
 */
z.client.facet.ActionFacet.prototype._getArgs = function () {
  var args = {};
  goog.array.forEach(this.action.args, function (item) {
    args[item] = this[item]();
  }, this);
  return args;
};

/**
 * @private
 * @return {boolean}
 */
z.client.facet.ActionFacet.prototype._canExecute = function () {
  var args = this._getArgs();
  return this.action.canExecute(args);
};

/**
 * @expose
 * @type {function()}
 */
z.client.facet.ActionFacet.prototype.execute = function () {
  var args = this._getArgs();
  this.action.execute(args);
};
