goog.provide('z.client.facet.Gem');

goog.require('z.client.facet.Facet');
goog.require('mugd.Injector');
goog.require('z.client');

/**
 * @param {!z.client.facet.MapFacet} mapFacet
 * @param {!z.client.facet.ContextMenuFacet} contextMenuFacet
 * @param {!z.client.facet.ToolbarFacet} toolbarFacet
 * @param {!z.client.WorldProxy} world
 * @extends {z.client.facet.Facet}
 * @param {function(z.client.facet.EntityFacet=):z.client.facet.EntityFacet} currentTarget
 * @param {function(z.client.facet.ActionFacet=):z.client.facet.ActionFacet} currentAction
 * @constructor
 */
z.client.facet.Gem = function (mapFacet, contextMenuFacet, toolbarFacet, world, currentTarget, currentAction) {
  goog.base(this);
  /**
   * @type {!z.client.facet.MapFacet}
   */
  this['mapFacet'] = mapFacet;
  /**
   * @type {!z.client.facet.ContextMenuFacet}
   */
  this['contextMenuFacet'] = contextMenuFacet;
  /**
   * @type {!z.client.facet.ToolbarFacet}
   */
  this['toolbarFacet'] = toolbarFacet;
  /**
   * @type {function(z.client.facet.EntityFacet=):z.client.facet.EntityFacet}
   */
  this['currentTarget'] = currentTarget;
  /**
   * @type {function(z.client.facet.ActionFacet=):z.client.facet.ActionFacet}
   */
  this['currentAction'] = currentAction;

  this['mapFacet'].setParentEventTarget(this);
  this['contextMenuFacet'].setParentEventTarget(this);
  this['toolbarFacet'].setParentEventTarget(this);
  world.setParentEventTarget(this);
};

goog.inherits(z.client.facet.Gem, z.client.facet.Facet);

z.client.facet.Gem.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.MAP_FACET,
  z.client.Resources.CONTEXT_MENU_FACET,
  z.client.Resources.TOOLBAR_FACET,
  z.client.Resources.WORLD,
  z.client.Resources.CURRENT_TARGET,
  z.client.Resources.CURRENT_ACTION
];
