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
 * @override
 */
z.client.actions.EndTurn.prototype._canExecuteInternal = function () {
  return true;
};

/**
 * @override
 */
z.client.actions.EndTurn.prototype._executeInternal = function () {
  this._world.endTurn();
};




