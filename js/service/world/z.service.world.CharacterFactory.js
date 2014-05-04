goog.provide('z.service.world.CharacterFactory');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.service.world.CharacterFactory = function(services){
  /**
   * @type {!Object}
   */
  var ruleset = /** @type {!Object} */services.get(z.common.Resources.RULESET);

  /**
   * @type {z.common.rulebook.CharacterBase}
   */
  var characterBase = /** @type {z.common.rulebook.CharacterBase}*/ services.get(z.common.Resources.CHARACTER_GENERATOR);
}
