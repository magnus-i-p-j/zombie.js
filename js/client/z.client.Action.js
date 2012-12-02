goog.provide('z.client.Action');

/**
 * @constructor
 */
z.client.Action = function () {
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


