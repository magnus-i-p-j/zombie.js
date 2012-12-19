goog.provide('z.client.Action');

/**
 * @param {string} name
 * @constructor
 */
z.client.Action = function (name) {
  this.name = name;
};

/**
 * @param {!z.client.facet.EntityFacet} target
 * @return {boolean}
 * @abstract
 */
z.client.Action.prototype.canExecute = function (target) {
};

/**
 * @param {!z.client.facet.EntityFacet} target
 * @abstract
 */
z.client.Action.prototype.execute = function (target) {
};


