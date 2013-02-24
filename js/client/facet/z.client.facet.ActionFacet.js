goog.provide('z.client.facet.ActionFacet');

goog.require('goog.array');

/**
 * @param {!z.client.Action} action
 * @constructor
 */
z.client.facet.ActionFacet = function (action) {

  /**
   * @private
   * @type {!z.client.Action}
   */
  this._action = action;

  /**
   * @type {string}
   */
  this['type'] = this._action.meta.type;
  /**
   * @type {z.common.rulebook.category}
   */
  this['category'] = this._action.meta.category;
  /**
   * @type {string}
   */
  this['name'] = this._action.meta.name;
  /**
   * @type {string}
   */
  this['description'] = this._action.meta.description;

  goog.array.forEach(this._action.args, function (item) {
    this[item] = ko.observable();
  }, this);

  /**
   * @type {function(boolean=): boolean}
   */
  this['canExecute'] = ko.computed(this._canExecute, this);
};

/**
 * @return {!z.client.action.Args}
 * @private
 */
z.client.facet.ActionFacet.prototype._getArgs = function () {
  var args = {};
  goog.array.forEach(this._action.args, function (item) {
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
  return this._action.canExecute(args);
};

/**
 * @expose
 * @type {function()}
 */
z.client.facet.ActionFacet.prototype.execute = function () {
  var args = this._getArgs();
  this._action.execute(args);
};
