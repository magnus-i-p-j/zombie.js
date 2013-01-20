goog.provide('z.client.Action');

/**
 * @param {string} name
 * @constructor
 */
z.client.Action = function (name) {
  this.name = name;
};

/**
 * @param {!Object} target
 * @return {boolean}
 */
z.client.Action.prototype.canExecute = function (target) {
};

/**
 * @param {!Object} target
 */
z.client.Action.prototype.execute = function (target) {
};


