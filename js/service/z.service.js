goog.provide('z.service');
goog.require('mugd.injector.Injector');


/**
 * @enum {string}
 */
z.service.Resources = {
  INJECTOR: mugd.injector.Injector.INJECTOR,
  RULESET: 'ruleset',
  WORLD: 'world',
  RULEBOOK: 'rulebook',
  REPOSITORY: 'repository',
  TERRAIN_SEED: 'terrain seed',
  TERRAIN_GENERATOR: 'terrain generator'
};

