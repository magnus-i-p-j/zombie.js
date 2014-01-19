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
  ACTOR: 'actor',
  STOCKPILE:'stockpile',
  STARTING_RESOURCES:'starting_resources',
  ACTION:'action',
  BOUNDS:'bounds',
  TILE:'tile'
};

//noinspection JSUnusedLocalSymbols
z.common.rulebook.logic.prerequisites = {
  'terrain':function (condition, target) {
    if(!(target instanceof z.common.entities.Tile)){
      return false;
    }

    var fulfilled = false;
    goog.object.forEach(target.terrain, function(terrain){
      fulfilled = fulfilled || goog.array.contains(condition, terrain);
    });

    return fulfilled;
  },
  'blocked': function(condition, target){
    return false;
  }
};

/**
 * @param {!z.common.entities.Entity} entity
 * @return number
 */
z.common.rulebook.logic.actionRange = function(entity){
  if(entity.vision){
    return entity.vision + 5;
  }
  return 0;
};