goog.provide('z.client');
goog.require('mugd.Injector');

/**
 * @enum {string}
 */
z.client.Resources = {
  INJECTOR: mugd.Injector.INJECTOR,
  RULESET: 'ruleset',
  WORLD: 'world',
  WORLD_URL: 'world url',
  RULEBOOK: 'rulebook',
  MAP_WIDGET: 'map widget',
  GAME_SESSION_WIDGET: 'game_session_widget',
  GEM: 'gem',
  MAP_FACET: 'map_facet',
  CONTEXT_MENU_FACET: 'context_menu_facet',
  GAME_DOM_ELEMENT: 'game_dom_element',
  ACTION_FACTORY: 'action_factory',
  TILE_FACET_FACTORY: 'tile_facet_factory'
};
