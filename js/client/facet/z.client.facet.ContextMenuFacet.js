goog.provide('z.client.facet.ContextMenuFacet');

goog.require('goog.array');

goog.require('z.client.facet.Facet');
goog.require('mugd.Injector');
goog.require('z.client');

goog.require('z.common.entities.Tile');
goog.require('z.common.rulebook.Rulebook');

/**
 * @param {!z.ui.ActionFactory} actionFactory
 * @constructor
 */
z.client.facet.ContextMenuFacet = function (actionFactory) {
  goog.base(this);

  /**
   * @type {!z.ui.ActionFactory}
   * @private
   */
  this._actionFactory = actionFactory;

  this.visible = ko.observable(false);
  this.actionFacets = ko.observableArray();
};

goog.inherits(z.client.facet.ContextMenuFacet, z.client.facet.Facet);

z.client.facet.ContextMenuFacet.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.ACTION_FACTORY
];

/**
 * @param {!z.client.facet.Gem} parent
 */
z.client.facet.ContextMenuFacet.prototype.setParentEventTarget = function (parent) {
  goog.base(this, 'setParentEventTarget', parent);
  // TODO: listen for context menu events
};

/**
 * @param {!z.client.events.ShowContextMenuEvent} showContextMenuEvent
 */
z.client.facet.ContextMenuFacet.prototype.showContextMenuCallback = function (showContextMenuEvent) {
  this._hide();
  this.actionFacets.removeAll();
  var ctx = showContextMenuEvent.data.context;
  if (ctx) {
    var actions = this._getContextualActions(ctx);
    this._show(showContextMenuEvent.position);
  }
};

/**
 * @param {!z.common.entities.Entity[]} context
 * @return {z.client.facet.ActionFacet[]} actions
 * @private
 */
z.client.facet.ContextMenuFacet.prototype._getContextualActions = function (context) {
  var actionFacets = [];
  var actionFactory = this._actionFactory;
  goog.array.forEach(context, function (entity) {
    var actions = actionFactory.getActions(entity.meta);
    goog.array.forEach(actions, function (action) {
      var facet = new z.client.facet.ActionFacet(action, entity);
      if (facet.canExecute()) {
        actionFacets.push(facet);
      }
    });
  });
  return actionFacets;
};

/**
 * @param {!goog.math.Coordinate} position
 * @private
 */
z.client.facet.ContextMenuFacet.prototype._show = function (position) {
  this.position = position;
  this.visible(true);
};

/**
 * @private
 */
z.client.facet.ContextMenuFacet.prototype._hide = function () {
  this.visible(false);
  this.position = null;
};
