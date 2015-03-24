goog.provide('z.service.world.GameEnder');

goog.require('z.common.rulebook.Trigger');
goog.require('goog.array');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements {mugd.injector.IInjectable}
 */
z.service.world.GameEnder = function(services) {
  /**
   * @type {!z.common.rulebook.Rulebook}
   * @private
   */
  var rulebook = /** @type {!z.common.rulebook.Rulebook} */ (services.get(z.common.Resources.RULEBOOK));

  /**
   * @type {Array.<!z.common.rulebook.Trigger>}
   */
  this.triggers = goog.array.map(rulebook.gameOver, function(trigger) {
    return new z.common.rulebook.Trigger(trigger);
  });

};

z.service.world.GameEnder.prototype.getEffects = function(triggerArgs) {
  return goog.array.flatten(
    goog.array.map(
      this.triggers, function(trigger) {
        if (trigger.test(triggerArgs)) {
          return trigger.effects();
        } else {
          return [];
        }
      }
    )
  );
};