goog.provide('z.facet.ContextMenuFacet');
goog.require('z.entities.Tile');
goog.require('z.rulebook.Rulebook');
goog.require('goog.array');

/**
 * @param {!z.ui.ActionFactory} actionFactory
 * @param {!z.facet.Gem} gem
 * @constructor
 */
z.facet.ContextMenuFacet = function (actionFactory, gem) {

  /**
   * @type {!z.ui.ActionFactory}
   * @private
   */
  this._actionFactory = actionFactory;

  /**
   * @type {!z.facet.Gem}
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
z.facet.ContextMenuFacet.prototype.showContextMenuCallback = function (showContextMenuEvent) {
  this._hide();
  this.actionFacets.removeAll();
  var ctx = showContextMenuEvent.data.context;
  if (ctx) {
    var actions = this._getContextualActions(ctx);
    goog.array.forEach(actions, function (a) {
      var facet = new z.client.facet.ActionFacet(this._gem, this, a);
      this.actionFacets.push(facet);
    }, this);
    this._show(showContextMenuEvent.position);
  }
};

/**
 * @param {!z.entities.Entity[]} ctx
 * @return {z.facet.ActionFacet[]} actions
 * @private
 */
z.facet.ContextMenuFacet.prototype._getContextualActions = function (ctx) {
  var actionFacets = [];
  var actionFactory = this._actionFactory;
  goog.array.forEach(ctx, function (c) {
    var actions = actionFactory.getActions(c.meta);
    goog.array.forEach(actions, function (a) {
      var facet = new z.client.facet.ActionFacet(c, a);
      actionFacets.push(facet);
    });
  });
  return actionFacets;
};

/**
 * @param {!goog.math.Coordinate} position
 * @private
 */
z.facet.ContextMenuFacet.prototype._show = function (position) {
  this.position = position;
  this.visible(true);
};

/**
 * @private
 */
z.facet.ContextMenuFacet.prototype._hide = function () {
  this.visible(false);
  this.position = null;
};
