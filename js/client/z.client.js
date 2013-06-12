goog.provide('z.client');
goog.require('mugd.injector.Injector');

/**
 * @enum {string}
 */
z.client.Resources = {
  INJECTOR:mugd.injector.Injector.INJECTOR,
  RULESET:'ruleset',
  WORLD:'world',
  WORLD_SERVICE:'world service',
  RULEBOOK:'rulebook',
  MAP_WIDGET:'map widget',
  GAME_SESSION_WIDGET:'game_session_widget',
  CONTEXT_MENU_WIDGET:'context_menu_widget',
  MESSAGE_LOG_WIDGET: 'message_log_widget',
  GEM:'gem',
  MAP_FACET:'map_facet',
  CONTEXT_MENU_FACET:'context_menu_facet',
  GAME_DOM_ELEMENT:'game_dom_element',
  ACTION_FACTORY:'action_factory',
  TOOLBAR_FACET:'toolbar',
  INFO_FACET:'info_facet',
  MESSAGE_LOG_FACET:'message_log_facet',
  TOOLBAR_ACTION_FACETS:'toolbar_action_facets',
  REPOSITORY:'repository',
  CURRENT_TARGET:'current_target',
  CURRENT_ACTION:'current_action',
  END_TURN_ACTION:'end_turn_action'
};

/**
 * @typedef {{
 *  turn: number,
 *  html: string,
 *  tags: Object.<!z.client.Tags,boolean>,
 *  time: Date
 * }}
 */
z.client.logItem;

/**
 * @enum {string}
 */
z.client.Tags = {
  INFO:'info',
  DEBUG:'debug',
  WARNING:'warning',
  ERROR:'error'
};
