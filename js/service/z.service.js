goog.provide('z.service');
goog.require('mugd.Injector');


/**
 * @enum {string}
 */
z.service.Resources = {
  INJECTOR: mugd.Injector.INJECTOR,
  RULESET: 'ruleset',
  WORLD: 'world',
  RULEBOOK: 'rulebook',
  REPOSITORY: 'repository',
  TERRAIN_SEED: 'terrain seed',
  TERRAIN_GENERATOR: 'terrain generator'
};

