goog.provide('z.client.facet.Gem');

goog.require('z.client.facet.Facet');
goog.require('mugd.Injector');
goog.require('z.client');

/**
 * @param {!z.client.facet.MapFacet} mapFacet
 * @param {!z.client.facet.ContextMenuFacet} contextMenuFacet
 * @param {!z.client.WorldProxy} world
 * @extends {z.client.facet.Facet}
 * @constructor
 */
z.client.facet.Gem = function (mapFacet, contextMenuFacet, world, currentTarget) {
  goog.base(this);
  /**
   * @expose
   * @type {!z.client.facet.MapFacet}
   */
  this.mapFacet = mapFacet;
  /**
   * @expose
   * @type {!z.client.facet.ContextMenuFacet}
   */
  this.contextMenuFacet = contextMenuFacet;
  /**
   * @expose
   * @type {function(z.client.facet.EntityFacet=):z.client.facet.EntityFacet}
   */
  this.currentTarget = currentTarget;

  this.world = world;
  this.mapFacet.setParentEventTarget(this);
  this.contextMenuFacet.setParentEventTarget(this);
  this.world.setParentEventTarget(this);
};

goog.inherits(z.client.facet.Gem, z.client.facet.Facet);

z.client.facet.Gem.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.MAP_FACET,
  z.client.Resources.CONTEXT_MENU_FACET,
  z.client.Resources.WORLD,
  z.client.resources.CURRENT_TARGET
];
