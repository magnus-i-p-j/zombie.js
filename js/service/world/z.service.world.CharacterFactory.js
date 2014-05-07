goog.provide('z.service.world.CharacterFactory');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.service.world.CharacterFactory = function (services) {
  /**
   * @type {!Object}
   */
  var ruleset = /** @type {!Object} */services.get(z.common.Resources.RULESET);

  /**
   * @type {z.common.rulebook.CharacterGenerator}
   */
  var characterGenerator = /** @type {z.common.rulebook.CharacterGenerator}*/ services.get(z.common.Resources.CHARACTER_GENERATOR);
};
