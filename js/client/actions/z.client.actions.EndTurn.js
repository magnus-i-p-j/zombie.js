goog.provide('z.client.actions.EndTurn');

goog.require('z.client.Action');

/**
 * @param {!z.client.WorldProxy} world
 * @constructor
 * @extends {z.client.Action}
 */
z.client.actions.EndTurn = function(world){
  this._world = world;
};

/**
 * @param {!z.client.facet.EntityFacet} target
 * @return {boolean}
 */
z.client.actions.EndTurn.prototype.canExecute = function (target) {
};

/**
 * @param {!z.client.facet.EntityFacet} target
 */
z.client.actions.EndTurn.prototype.execute = function (target) {
};




