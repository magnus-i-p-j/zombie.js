goog.provide('z.client.action');

/**
 * @typedef {{
 *  z.client.action.ArgsType.TARGET: (z.client.facet.EntityFacet|undefined)
 * }}
 */
z.client.action.Args;

/**
 * @enum {string}
 */
z.client.action.ArgsType = {
  TARGET: 'target',
  WORLD:z.client.Resources.WORLD
};