goog.provide('z.client.Action');

/**
 * @constructor
 */
z.client.Action = function (name) {
  this.name = name;
};

/**
 * @param {!z.common.entities.Entity} target
 * @abstract
 */
z.client.Action.prototype.canExecute = function (target) {
};

/**
 * @param {!z.common.entities.Entity} target
 * @abstract
 */
z.client.Action.prototype.execute = function (target) {
};


