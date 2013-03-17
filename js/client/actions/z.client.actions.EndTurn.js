goog.provide('z.client.actions.EndTurn');

goog.require('z.client.action.Action');
goog.require('z.client');
goog.require('z.common.rulebook');

/**
 * @param {!z.client.WorldProxy} world
 * @constructor
 * @extends {z.client.action.Action}
 */
z.client.actions.EndTurn = function (world) {
  goog.base(this, 'End turn');
  this._world = world;
  this.meta = {
    type: 'action_end_turn',
    category: z.common.rulebook.category.ACTION,
    name: 'End turn',
    description: 'Ends your turn, commence gnawing'
  };
};
goog.inherits(z.client.actions.EndTurn, z.client.action.Action);

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




