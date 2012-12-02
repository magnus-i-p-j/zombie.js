goog.provide('z.client.facet.Gem');

goog.require('z.client.facet.Facet');
goog.require('mugd.Injector');
goog.require('z.client');

/**
 * @param {!z.client.facet.MapFacet} mapFacet
 * @param {!z.client.facet.ContextMenuFacet} contextMenuFacet
 * @param {!z.client.WorldProxy} world
 * @constructor
 */
z.client.facet.Gem = function (mapFacet, contextMenuFacet, world) {
  goog.base(this);
  this.mapFacet = mapFacet;
  this.contextMenuFacet = contextMenuFacet;
  this.world = world;
  this.focusedTile = ko.observable();

  this.mapFacet.setParentEventTarget(this);
  this.contextMenuFacet.setParentEventTarget(this);
  this.world.setParentEventTarget(this);
};

goog.inherits(z.client.facet.Gem, z.client.facet.Facet);

z.client.facet.Gem.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.MAP_FACET,
  z.client.Resources.CONTEXT_MENU_FACET,
  z.client.Resources.WORLD
];
