goog.provide('z.ui.Action');

/**
 * @constructor
 */
z.ui.Action = function () {
};

/**
 * @param {!z.common.entities.Entity} target
 * @abstract
 */
z.ui.Action.prototype.canExecute = function (target) {
};

/**
 * @param {!z.common.entities.Entity} target
 * @abstract
 */
z.ui.Action.prototype.execute = function (target) {
};


