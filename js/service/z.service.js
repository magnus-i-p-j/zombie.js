goog.provide('z.service');
goog.require('mugd.injector.Injector');


/**
 * @enum {string}
 */
z.service.Resources = {
  INJECTOR: mugd.injector.Injector.INJECTOR,
  RULESET: 'service_ruleset',
  WORLD: 'service_world',
  RULEBOOK: 'service_rulebook',
  REPOSITORY: 'service_repository',
  TERRAIN_SEED: 'service_terrain seed',
  TERRAIN_GENERATOR: 'service_terrain generator'
};

