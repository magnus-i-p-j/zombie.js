goog.provide('z.client.actions.EndTurn');

goog.require('z.client.action.Action');
goog.require('z.client');
goog.require('z.common.rulebook');

/**
 * @param {!mugd.injector.ServiceHolder} services
 * @constructor
 * @implements {mugd.injector.IInjectable}
 */
z.client.actions.EndTurn = function (services) {
  goog.base(this, 'End turn');
  /**
   * @type {!z.client.WorldProxy}
   * @private
   */
  this._world = services.get(z.client.Resources.WORLD);
  this.meta = {
    type: 'action_end_turn',
    category: z.common.rulebook.category.ACTION,
    name: 'End turn',
    description: 'Ends your turn, commence gnawing'
  };
};
goog.inherits(z.client.actions.EndTurn, z.client.action.Action);

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




