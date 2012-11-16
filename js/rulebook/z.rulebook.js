goog.provide('z.rulebook');
goog.provide('z.rulebook.logic');

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
 * @typedef {{
 *   type: string,
 *   category: z.rulebook.category,
 *   name: string,
 *   description: string,
 *   prerequisites: z.rulebook.prerequisites,
 *   cost: z.rulebook.cost,
 *   effect: z.rulebook.effect
 * }}
 */
z.rulebook.improvement;

/**
 * @typedef {{
 *   terrain: string[]
 * }}
 */
z.rulebook.prerequisites;

/**
 * @typedef {{
 *   labour: number
 * }}
 */
z.rulebook.cost;

/**
 * @typedef {{
 *   terrain: string
 * }}
 */
z.rulebook.effect;

/**
 * @enum {string}
 */
z.rulebook.category = {
  IMPROVEMENT: 'improvement',
  TERRAIN: 'terrain',
  ITEM: 'item',
  CHARACTER: 'character',
  ASSET: 'asset',
  TECH: 'tech'
};

z.rulebook.logic.prerequisites = {
  'terrain':function (condition, target) {
    return goog.array.contains(condition, target.terrain);
  }
};