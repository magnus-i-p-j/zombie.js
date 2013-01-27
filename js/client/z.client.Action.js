goog.provide('z.client.Action');

goog.require('z.client.action');
goog.require('goog.array');

/**
 * @param {string} name
 * @constructor
 */
z.client.Action = function (name) {
  this.name = name;
};

/**
 * @param {!z.client.action.Args=} args
 * @return {boolean}
 */
z.client.Action.prototype.canExecute = function (args) {
  var allArgsMet;
  if (goog.isDef(args)) {
    allArgsMet = goog.array.every(
        this.args,
        function (item) {
          return goog.isDefAndNotNull(args[item]);
        },
        this
    );
  } else {
    allArgsMet = this.args.length === 0;
  }

  if (allArgsMet) {
    return this._canExecuteInternal(args);
  }
  return false;
}
;

/**
 * @param {!z.client.action.Args=} args
 * @return {boolean}
 * @protected
 */
z.client.Action.prototype._canExecuteInternal = function (args) {
  return false;
};

/**
 * @param {!z.client.action.Args=} args
 */
z.client.Action.prototype.execute = function (args) {
  if (this._canExecuteInternal(args)) {
    this._executeInternal(args);
  } else {
    throw {
      'name':'Cannot execute with given arguments',
      'args':args,
      'required args':this.args
    };
  }
};

/**
 * @param {!z.client.action.Args=} args
 * @protected
 */
z.client.Action.prototype._executeInternal = function (args) {
};

/**
 * @type {Array.<!z.client.action.ArgsType>}
 */
z.client.Action.prototype.args = [];
