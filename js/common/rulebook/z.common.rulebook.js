goog.provide('z.common.rulebook');
goog.provide('z.common.rulebook.logic');

/**
 * @typedef {{
 *   type: string,
 *   category: z.common.rulebook.category,
 *   name: string,
 *   description: string
 * }}
 */
z.common.rulebook.meta;

/**
 * @typedef {{
 *   type: string,
 *   category: z.common.rulebook.category,
 *   name: string,
 *   description: string,
 *   prerequisites: z.common.rulebook.prerequisites,
 *   cost: z.common.rulebook.cost,
 *   effect: z.common.rulebook.effect
 * }}
 */
z.common.rulebook.improvement;

/**
 * @typedef {{
 *   terrain: Array.<string>
 * }}
 */
z.common.rulebook.prerequisites;

/**
 * @typedef {{
 *   labour: number
 * }}
 */
z.common.rulebook.cost;

/**
 * @typedef {{
 *   terrain: string
 * }}
 */
z.common.rulebook.effect;

/**
 * @enum {string}
 */
z.common.rulebook.category = {
  IMPROVEMENT: 'improvement',
  TERRAIN: 'terrain',
  ITEM: 'item',
  CHARACTER: 'character',
  ASSET: 'asset',
  TECH: 'tech'
};

z.common.rulebook.logic.prerequisites = {
  'terrain':function (condition, target) {
    return goog.array.contains(condition, target.terrain);
  },
  'blocked': function(condition, target){
    return false;
  }
};