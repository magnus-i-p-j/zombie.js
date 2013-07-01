goog.provide('z.client');
goog.require('mugd.injector.Injector');

/**
 * @enum {string}
 */
z.client.Resources = {
  INJECTOR:mugd.injector.Injector.INJECTOR,
  RULESET:'client_ruleset',
  WORLD:'client_world',
  WORLD_SERVICE:'client_world service',
  RULEBOOK:'client_rulebook',
  MAP_WIDGET:'client_map widget',
  GAME_SESSION_WIDGET:'client_game_session_widget',
  CONTEXT_MENU_WIDGET:'client_context_menu_widget',
  MESSAGE_LOG_WIDGET: 'client_message_log_widget',
  GEM:'client_gem',
  MAP_FACET:'client_map_facet',
  CONTEXT_MENU_FACET:'client_context_menu_facet',
  GAME_DOM_ELEMENT:'client_game_dom_element',
  ACTION_FACTORY:'client_action_factory',
  TOOLBAR_FACET:'client_toolbar',
  INFO_FACET:'client_info_facet',
  MESSAGE_LOG_FACET:'client_message_log_facet',
  TOOLBAR_ACTION_FACETS:'client_toolbar_action_facets',
  REPOSITORY:'client_repository',
  CURRENT_TARGET:'client_current_target',
  CURRENT_ACTION:'client_current_action',
  END_TURN_ACTION:'client_end_turn_action',
  ENTITY_MAP:'client_entity_map'
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
