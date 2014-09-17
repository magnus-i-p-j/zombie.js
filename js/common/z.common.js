goog.provide('z.common');

z.common.Resources = {
  INJECTOR: mugd.injector.Injector.INJECTOR,
  RULESET: 'common_ruleset',
  RULEBOOK: 'common_rulebook',
  REPOSITORY: 'common_repository',
  WORLD:'common_world'
};

/**
 * @typedef {!Object.<string, string>}
 */
z.common.terrain;

/**
 * @typedef{{
 *  density: number,
 *  defence: number,
 *  attraction: number,
 *  activity: number,
 *  danger: number
 * }}
 */
z.common.zombiedata;