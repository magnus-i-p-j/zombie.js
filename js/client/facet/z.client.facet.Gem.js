goog.provide('z.client.facet.Gem');

goog.require('z.client.facet.Facet');
goog.require('mugd.injector.Injector');
goog.require('z.client');
goog.require('z.common.EntityQuery');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.client.facet.Facet}
 * @implements mugd.injector.IInjectable
 * @constructor
 */
z.client.facet.Gem = function (services) {
  goog.base(this);
  /**
   * @type {!z.client.facet.MapFacet}
   */
  this['mapFacet'] = /** @type   {!z.client.facet.MapFacet} */services.get(z.client.Resources.MAP_FACET);
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
   * @type {function(z.client.facet.ProjectListFacet=):z.client.facet.ProjectListFacet}
   */
  this['projectsFacet'] = /** @type {function(z.client.facet.ProjectListFacet=):z.client.facet.ProjectListFacet} */ services.get(z.client.Resources.PROJECT_LIST_FACET);

  /** @type {!mugd.injector.Injector} */
  var injector = /** @type {!mugd.injector.Injector} */ services.get(z.common.Resources.INJECTOR);
  var entityQuery = new z.common.EntityQuery();
  var player = /** @type {!z.client.facet.ActorFacet}*/ services.get(z.client.Resources.PLAYER_FACET);
  entityQuery.owner = player['guid'];
  /**
   * @type {function(z.client.facet.CharacterListFacet=):z.client.facet.CharacterListFacet}
   */
  this['ownedCharactersFacet'] = /** @type {function(z.client.facet.CharacterListFacet=):z.client.facet.CharacterListFacet} */ injector.Compose(z.client.facet.CharacterListFacet).With({'entityQuery': entityQuery}).New();

  /**
   * @type {!z.common.EntityRepository}
   */
  var repository = /** @type {!z.common.EntityRepository} */ services.get(z.common.Resources.REPOSITORY);

  /**
   * @type {!z.client.WorldProxy}
   */
  var world = /** @type {!z.client.WorldProxy} */ services.get(z.common.Resources.WORLD);

  this['mapFacet'].setParentEventTarget(this);
  this['contextMenuFacet'].setParentEventTarget(this);
  this['toolbarFacet'].setParentEventTarget(this);
  this['infoFacet'].setParentEventTarget(this);
  this['messageLogFacet'].setParentEventTarget(this);
  this['projectsFacet'].setParentEventTarget(this);
  this['ownedCharactersFacet'].setParentEventTarget(this);

  repository.setParentEventTarget(this);
  world.setParentEventTarget(this);
};

goog.inherits(z.client.facet.Gem, z.client.facet.Facet);

