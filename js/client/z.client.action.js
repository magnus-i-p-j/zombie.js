goog.provide('z.client.action');

/**
 * @typedef {{
 *  target: z.client.facet.EntityFacet
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

