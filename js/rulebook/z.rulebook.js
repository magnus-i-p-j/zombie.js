goog.provide('z.rulebook');

/**
 * @typedef {{
 *   type: string,
 *   category: z.rulebook.category,
 *   name: string,
 *   description: string
 * }}
 */
z.rulebook.meta;

/**
 * @enum {string}
 */
z.rulebook.category = {
  IMPROVEMENT: 'improvement',
  TERRAIN: 'terrain',
  ITEM: 'item',
  CHARACTER: 'character'
};

