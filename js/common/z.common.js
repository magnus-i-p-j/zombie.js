goog.provide('z.common');

z.common.Resources = {
  INJECTOR: mugd.injector.Injector.INJECTOR,
  RULESET: 'common_ruleset',
  RULEBOOK: 'common_rulebook',
  REPOSITORY: 'common_repository',
  WORLD:'common_world'
};

/**
 * @type {string}
 * @const
 */
z.common.STATIC = 'game://static/';

/**
 * @typedef {!Object.<string, string>}
 */
z.common.terrain;

/**
 * @typedef {{
 *  density: number,
 *  defence: number,
 *  attraction: number,
 *  activity: number,
 *  danger: number
 * }}
 */
z.common.zombiedata;