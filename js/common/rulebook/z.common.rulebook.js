goog.provide('z.common.rulebook');
goog.provide('z.common.rulebook.logic');

goog.require('z.common.messages');

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
 * @typedef{Object.<string, number>}
 */
z.common.rulebook.upkeep_stockpile;

/**
 * @typedef {{
 *   type: string,
 *   category: z.common.rulebook.category,
 *   name: string,
 *   description: string,
 *   upkeep: z.common.rulebook.upkeep_stockpile,
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
 *   upkeep: z.common.rulebook.upkeep_stockpile,
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
 *   upkeep: z.common.rulebook.upkeep_stockpile,
 *   frequency: number,
 *   stats : z.common.rulebook.stats,
 *   traits: Array.<z.common.rulebook.possible_trait>
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
 * @typedef {Array.<string>}
 */
z.common.rulebook.year;

/**
 * @typedef {{
 *   type: string,
 *   args: (z.common.rulebook.effect_stockpile|z.common.rulebook.effect_terrain|z.common.rulebook.effect_end)
 * }}
 */
z.common.rulebook.effect;

/**
 * @typedef {Array.<{
 *   type: string,
 *   magnitude: number
 * }>}
 */
z.common.rulebook.effect_stockpile;

/**
 * @typedef {Object.<string, number>}
 */
z.common.rulebook.upkeep;

/**
 * @typedef {string}
 */
z.common.rulebook.effect_terrain;

/**
 * @typedef {boolean}
 */
z.common.rulebook.effect_end;

/**
 * @typedef {string}
 */
z.common.rulebook.effect_game_over;

/**
 * @typedef {{
 *   magnitude: ?number,
 *   skill: ?number
 * }}
 */
z.common.rulebook.effect_cull_zombies;

/**
 * @typedef {{
 *  text: string,
 *  level: z.common.messages.level
 * }}
 */
z.common.rulebook.effect_message;

/**
 * @typedef {number}
 */
z.common.rulebook.effect_points;

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
 * @typedef {{
 *   predicate: !z.common.rulebook.predicate,
 *   effects: Array.<!z.common.rulebook.effect>
 * }}
 */
z.common.rulebook.trigger;

/**
 * @typedef {{
 *  type: !z.common.rulebook.predicate_type,
 *  season: ?string,
 *  duration: ?number
 * }}
 */
z.common.rulebook.predicate;

/**
 * @enum {string}
 */
z.common.rulebook.predicate_type = {
  COMPLETE: 'complete',
  END: 'end',
  SEASON: 'season',
  DURATION: 'duration',
  PEOPLE: 'people',
  TURN: 'turn'
};


/**
 * @typedef {{
 *   duration: ?number,
 *   complete: ?boolean,
 *   end: ?boolean,
 *   season: ?string,
 *   people: ?number,
 *   turn: ?number
 * }}
 */
z.common.rulebook.trigger_args;

/**
 * @enum {string}
 */
z.common.rulebook.category = {
  PROJECT: 'project',
  TERRAIN: 'terrain',
  ZONE: 'zone',
  ACTOR: 'actor',
  STOCKPILE: 'stockpile',
  ACTION: 'action',
  BOUNDS: 'bounds',
  TILE: 'tile',
  ARCHETYPE: 'archetype',
  CHARACTER: 'character',
  CHARACTER_TYPE: 'character_type',
  TRAIT: 'trait'
};
/**
 * @enum {string}
 */
z.common.rulebook.bounds = {
  GAME_OVER: 'game_over',
  STARTING_RESOURCES: 'starting_resources',
  YEAR: 'year'
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
};

z.common.rulebook.logic.predicates = {};

/**
 * @param triggerArgs {!z.common.rulebook.trigger_args}
 * @param predicate {!z.common.rulebook.predicate}
 * @returns {boolean}
 */
z.common.rulebook.logic.predicates[z.common.rulebook.predicate_type.COMPLETE] = function(triggerArgs, predicate) {
  return !!triggerArgs['complete'];
};

/**
 * @param triggerArgs {!z.common.rulebook.trigger_args}
 * @param predicate {!z.common.rulebook.predicate}
 * @returns {boolean}
 */
z.common.rulebook.logic.predicates[z.common.rulebook.predicate_type.END] = function(triggerArgs, predicate) {
  return !!triggerArgs['end'];
};

/**
 * @param triggerArgs {!z.common.rulebook.trigger_args}
 * @param predicate {!z.common.rulebook.predicate}
 * @returns {boolean}
 */
z.common.rulebook.logic.predicates[z.common.rulebook.predicate_type.DURATION] = function(triggerArgs, predicate) {
  return triggerArgs['duration'] === predicate.duration;
};

/**
 * @param triggerArgs {!z.common.rulebook.trigger_args}
 * @param predicate {!z.common.rulebook.predicate}
 * @returns {boolean}
 */
z.common.rulebook.logic.predicates[z.common.rulebook.predicate_type.SEASON] = function(triggerArgs, predicate) {
  return triggerArgs['season'] === predicate.season;
};

/**
 * @param triggerArgs {!z.common.rulebook.trigger_args}
 * @param predicate {!z.common.rulebook.predicate}
 * @returns {boolean}
 */
z.common.rulebook.logic.predicates[z.common.rulebook.predicate_type.PEOPLE] = function(triggerArgs, predicate) {
  var people = triggerArgs['people'];
  var min = goog.isDefAndNotNull(predicate['min']) ? predicate['min'] : Number.NEGATIVE_INFINITY;
  var max = goog.isDefAndNotNull(predicate['max']) ? predicate['max'] : Number.POSITIVE_INFINITY;
  return (people >= min ) && ( people <= max ) ;
};

/**
 * @param triggerArgs {!z.common.rulebook.trigger_args}
 * @param predicate {!z.common.rulebook.predicate}
 * @returns {boolean}
 */
z.common.rulebook.logic.predicates[z.common.rulebook.predicate_type.TURN] = function(triggerArgs, predicate) {
  var turn = triggerArgs['turn'];
  var min = goog.isDefAndNotNull(predicate['min']) ? predicate['min'] : Number.NEGATIVE_INFINITY;
  var max = goog.isDefAndNotNull(predicate['max']) ? predicate['max'] : Number.POSITIVE_INFINITY;
  return (turn >= min ) && ( turn <= max ) ;
};
