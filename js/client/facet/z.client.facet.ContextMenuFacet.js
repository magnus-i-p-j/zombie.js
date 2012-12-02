goog.provide('z.client.facet.ContextMenuFacet');
goog.require('z.common.entities.Tile');
goog.require('z.common.rulebook.Rulebook');
goog.require('goog.array');

/**
 * @param {!z.ui.ActionFactory} actionFactory
 * @param {!z.client.facet.Gem} gem
 * @constructor
 */
z.client.facet.ContextMenuFacet = function (actionFactory, gem) {

  /**
   * @type {!z.ui.ActionFactory}
   * @private
   */
  this._actionFactory = actionFactory;

  /**
   * @type {!z.client.facet.Gem}
   * @private
   */
  this._gem = gem;

  this.visible = ko.observable(false);

  this.actionFacets = ko.observableArray();
  gem.evr.subscribe(z.client.events.ShowContextMenuEvent, goog.bind(this.showContextMenuCallback, this));
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
