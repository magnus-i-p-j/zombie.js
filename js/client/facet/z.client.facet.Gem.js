goog.provide('z.client.facet.Gem');

goog.require('z.client.facet.Facet');
goog.require('mugd.injector.Injector');
goog.require('z.client');

/**
 * @param {!mugd.injector.ServiceHolder} services
 * @extends {z.client.facet.Facet}
 * @constructor
 */
z.client.facet.Gem = function (services) {
  goog.base(this);
  /**
   * @type {!z.client.facet.MapFacet}
   */
  this['mapFacet'] = /** @type {!z.client.facet.MapFacet} */services.get(z.client.Resources.MAP_FACET);
  /**
   * @type {!z.client.facet.ContextMenuFacet}
   */
  this['contextMenuFacet'] = /** @type {!z.client.facet.ContextMenuFacet} */ services.get(z.client.Resources.CONTEXT_MENU_FACET);
  /**
   * @type {!z.client.facet.ToolbarFacet}
   */
  this['toolbarFacet'] = /** @type {!z.client.facet.ToolbarFacet} */ services.get(z.client.Resources.TOOLBAR_FACET);
  /**
   * @type {!z.client.facet.InfoFacet}
   */
  this['infoFacet'] = /** @type {!z.client.facet.InfoFacet} */ services.get(z.client.Resources.INFO_FACET);
  /**
   * @type {!z.client.facet.MessageLogFacet}
   */
  this['messageLogFacet'] = /** @type {!z.client.facet.MessageLogFacet} */ services.get(z.client.Resources.MESSAGE_LOG_FACET);
  /**
   * @type {function(z.client.facet.EntityFacet=):z.client.facet.EntityFacet}
   */
  this['currentTarget'] = /** @type {function(z.client.facet.EntityFacet=):z.client.facet.EntityFacet} */services.get(z.client.Resources.CURRENT_TARGET);
  /**
   * @type {function(z.client.facet.ActionFacet=):z.client.facet.ActionFacet}
   */
  this['currentAction'] = /** @type {function(z.client.facet.ActionFacet=):z.client.facet.ActionFacet} */ services.get(z.client.Resources.CURRENT_ACTION);

  /**
   * @type {!z.client.WorldProxy}
   */
  var world = /** @type {!z.client.WorldProxy} */ services.get(z.client.Resources.WORLD);

  this['mapFacet'].setParentEventTarget(this);
  this['contextMenuFacet'].setParentEventTarget(this);
  this['toolbarFacet'].setParentEventTarget(this);
  this['infoFacet'].setParentEventTarget(this);
  this['messageLogFacet'].setParentEventTarget(this);
  world.setParentEventTarget(this);
};

goog.inherits(z.client.facet.Gem, z.client.facet.Facet);

