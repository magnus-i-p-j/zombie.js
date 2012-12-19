goog.provide('z.client.facet.ContextMenuFacet');

goog.require('goog.array');

goog.require('z.client.facet.Facet');
goog.require('z.client.facet.ActionFacet');
goog.require('mugd.Injector');
goog.require('z.client');
goog.require('z.client.events');

goog.require('z.common.entities.Tile');
goog.require('z.common.rulebook.Rulebook');

/**
 * @param {!z.client.ActionFactory} actionFactory
 * @extends {z.client.facet.Facet}
 * @constructor
 */
z.client.facet.ContextMenuFacet = function (actionFactory) {
  goog.base(this);

  /**
   * @type {!z.client.ActionFactory}
   * @private
   */
  this._actionFactory = actionFactory;

  this.visible = ko.observable(false);
  this.position = ko.observable(null);
  this.actionFacets = ko.observableArray();
};

goog.inherits(z.client.facet.ContextMenuFacet, z.client.facet.Facet);

z.client.facet.ContextMenuFacet.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.ACTION_FACTORY
];

/**
 * @override
 */
z.client.facet.ContextMenuFacet.prototype.setParentEventTarget = function (parent) {
  goog.base(this, 'setParentEventTarget', parent);
  // TODO: listen for context menu events
  this.eventHandler.listen(parent, z.client.events.EventType.SHOW_CONTEXT_MENU,
      function (e) {
        this.doShowContextMenu(e.context, e.position);
      });
};
/**
 * @param {!Array.<z.client.facet.Facet>} context
 * @param {!goog.math.Coordinate} position
 */
z.client.facet.ContextMenuFacet.prototype.doShowContextMenu = function (context, position) {
  this.hide();
  this.actionFacets.removeAll();
  if (context) {
    var actions = this._getContextualActions(context);
    if (actions.length > 0) {
      ko.utils.arrayPushAll(this.actionFacets(), actions);
      this.actionFacets.valueHasMutated();
      this._show(position);
    }
  }
};

/**
 * @param {Array.<z.client.facet.Facet>} context
 * @return {Array.<z.client.facet.ActionFacet>} actions
 * @private
 */
z.client.facet.ContextMenuFacet.prototype._getContextualActions = function (context) {
  var actionFacets = [];
  var actionFactory = this._actionFactory;
  goog.array.forEach(context, function (f) {
        if (f) {
          /**
           * @type {!z.client.facet.Facet}
           */
          var facet = f;
          var actions = actionFactory.getActions(facet.meta());
          goog.array.forEach(actions, function (a) {
            if (a) {
              /**
               * @type {!z.client.Action}
               */
              var action = a;
              var actionFacet = new z.client.facet.ActionFacet(action, facet);
              if (actionFacet.canExecute()) {
                actionFacets.push(actionFacet);
              }
            }
          })
        }});
  return actionFacets;
};

/**
 * @param {!goog.math.Coordinate} position
 * @private
 */
z.client.facet.ContextMenuFacet.prototype._show = function (position) {
  this.position(position);
  this.visible(true);
};

z.client.facet.ContextMenuFacet.prototype.hide = function () {
  this.visible(false);
  this.position(null);
};
