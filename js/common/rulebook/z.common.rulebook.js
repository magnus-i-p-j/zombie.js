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
 *   activity: number,
 *   defence: number
 * }}
 */
z.common.rulebook.project;

/**
 * @typedef {{
 *   type: string,
 *   category: z.common.rulebook.category,
 *   name: string,
 *   description: string,
 *   activity: number,
 *   defence: number,
 *   zone: string
 * }}
 */
z.common.rulebook.terrain;

/**
 * @typedef {{
 *   terrain: Array.<!string>
 * }}
 */
z.common.rulebook.prerequisites;

/**
 * @typedef {{
 *   name: string,
 *   amount: number
 * }}
 */
z.common.rulebook.cost;

/**
 * @typedef {{
 *   type: string,
 *   category: z.common.rulebook.category,
 *   name: string,
 *   description: string,
 *   frequency: number,
 *   stats : z.common.rulebook.stats,
 *   traits: Array.<string>
 * }}
 */
z.common.rulebook.archetype;

/**
 * @typedef {{
 *     combat: number,
 *     knowledge: number,
 *     labour: number
 * }}
 */
z.common.rulebook.stats;

/**
 * @typedef {{
 *   type: string,
 *   args: (z.common.rulebook.effect_stockpile|z.common.rulebook.effect_terrain)
 * }}
 */
z.common.rulebook.effect;

/**
 * @typedef {{
 *   type: string,
 *   change: *
 * }}
 */
z.common.rulebook.result;


/**
 * @typedef {Array.<{
 *   type: string,
 *   magnitude: number
 * }>}
 */
z.common.rulebook.effect_stockpile;

/**
 * @typedef {string}
 */
z.common.rulebook.effect_terrain;

/**
 * @typedef {{
 *  name: string,
 *  description: ?string,
 *  gender: ?string,
 *  archetype: ?string
 * }}
 */
z.common.rulebook.character_base;

/**
 * @typedef {{
 *  type: string,
 *  probability: number
 * }}
 */
z.common.rulebook.possible_trait;

/**
 * @enum {string}
 */
z.common.rulebook.category = {
  PROJECT: 'project',
  TERRAIN: 'terrain',
  ZONE: 'zone',
  ACTOR: 'actor',
  STOCKPILE: 'stockpile',
  STARTING_RESOURCES: 'starting_resources',
  ACTION: 'action',
  BOUNDS: 'bounds',
  TILE: 'tile',
  ARCHETYPE: 'archetype',
  CHARACTER: 'character',
  CHARACTER_TYPE: 'character_type',
  TRAIT: 'trait'
};

//noinspection JSUnusedLocalSymbols
z.common.rulebook.logic.prerequisites = {
  'terrain': function(condition, target) {
    if (!(target instanceof z.common.entities.Tile)) {
      return false;
    }

    var fulfilled = false;
    goog.object.forEach(target.terrain, function(terrain) {
      fulfilled = fulfilled || goog.array.contains(condition, terrain);
    });

    return fulfilled;
  },
  'blocked': function(condition, target) {
    return false;
  },
  'danger': function(condition, target) {
    if (!(target instanceof z.common.entities.Tile)) {
      return false;
    }
    return condition >= target.zombieData.danger;
  }
}
;
