goog.provide('z.service');
goog.require('mugd.injector.Injector');


/**
 * @enum {string}
 */
z.service.Resources = {
  TERRAIN_SEED: 'service_terrain seed',
  TERRAIN_GENERATOR: 'service_terrain generator',
  CHARACTER_BASE: 'service_character_base',
  CHARACTER_FACTORY: 'service_character_factory'
};

/**
 * @enum string
 */
z.service.Directions = {
  NORTH_WEST_TERRAIN: 'nw',
  NORTH_EAST_TERRAIN: 'ne',
  EAST_TERRAIN: 'e',
  SOUTH_EAST_TERRAIN: 'se',
  SOUTH_WEST_TERRAIN: 'sw',
  WEST_TERRAIN: 'w',
  CENTER_TERRAIN: 'c'
};

