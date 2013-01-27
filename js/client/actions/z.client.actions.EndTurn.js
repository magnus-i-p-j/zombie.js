goog.provide('z.client.actions.EndTurn');

goog.require('z.client.Action');
goog.require('z.client');

/**
 * @param {!z.client.WorldProxy} world
 * @constructor
 * @extends {z.client.Action}
 */
z.client.actions.EndTurn = function(world){
  goog.base(this, 'End turn');
  this._world = world;
};
goog.inherits(z.client.actions.EndTurn, z.client.Action);

z.client.actions.EndTurn.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.WORLD
];

/**
 * @override
 */
z.client.actions.EndTurn.prototype._canExecuteInternal = function (args) {
  return true;
};

/**
 * @override
 */
z.client.actions.EndTurn.prototype._executeInternal = function (args) {
   this._world.endTurn();
};




