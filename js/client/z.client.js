goog.provide('z.client');
goog.require('mugd.Injector');

/**
 * @enum {string}
 */
z.client.Resources = {
  INJECTOR: mugd.Injector.INJECTOR,
  RULESET: 'ruleset',
  WORLD: 'world',
  WORLD_SERVICE: 'world service',
  RULEBOOK: 'rulebook',
  MAP_WIDGET: 'map widget',
  GAME_SESSION_WIDGET: 'game_session_widget',
  CONTEXT_MENU_WIDGET: 'context_menu_widget',
  GEM: 'gem',
  MAP_FACET: 'map_facet',
  CONTEXT_MENU_FACET: 'context_menu_facet',
  GAME_DOM_ELEMENT: 'game_dom_element',
  ACTION_FACTORY: 'action_factory',
  ENTITY_FACTORY: 'entity_factory',
  TOOLBAR_FACET: 'toolbar',
  TOOLBAR_ACTION_FACETS: 'toolbar_action_facets',
  REPOSITORY: 'repository'
};

