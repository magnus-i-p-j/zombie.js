goog.provide('z.client.facet.Gem');

goog.require('z.client.facet.Facet');
goog.require('mugd.injector.Injector');
goog.require('z.client');

/**
 * @param {!z.client.facet.MapFacet} mapFacet
 * @param {!z.client.facet.ContextMenuFacet} contextMenuFacet
 * @param {!z.client.facet.ToolbarFacet} toolbarFacet
 * @param {!z.client.facet.InfoFacet} infoFacet
 * @param {!z.client.facet.MessageLogFacet} messageLogFacet
 * @param {!z.client.WorldProxy} world
 * @extends {z.client.facet.Facet}
 * @param {function(z.client.facet.EntityFacet=):z.client.facet.EntityFacet} currentTarget
 * @param {function(z.client.facet.ActionFacet=):z.client.facet.ActionFacet} currentAction
 * @constructor
 */
z.client.facet.Gem = function (mapFacet, contextMenuFacet, toolbarFacet, infoFacet, messageLogFacet, world, currentTarget, currentAction) {
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
   * @type {!z.client.facet.InfoFacet}
   */
  this['infoFacet'] = infoFacet;
  /**
   * @type {!z.client.facet.MessageLogFacet}
   */
  this['messageLogFacet'] = messageLogFacet;
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
  this['infoFacet'].setParentEventTarget(this);
  this['messageLogFacet'].setParentEventTarget(this);
  world.setParentEventTarget(this);
};

goog.inherits(z.client.facet.Gem, z.client.facet.Facet);

z.client.facet.Gem.prototype[mugd.injector.Injector.DEPS] = [
  z.client.Resources.MAP_FACET,
  z.client.Resources.CONTEXT_MENU_FACET,
  z.client.Resources.TOOLBAR_FACET,
  z.client.Resources.INFO_FACET,
  z.client.Resources.MESSAGE_LOG_FACET,
  z.client.Resources.WORLD,
  z.client.Resources.CURRENT_TARGET,
  z.client.Resources.CURRENT_ACTION
];
