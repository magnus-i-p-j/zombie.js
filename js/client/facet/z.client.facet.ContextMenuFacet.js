goog.provide('z.client.facet.ContextMenuFacet');

goog.require('goog.array');

goog.require('z.client.facet.ActionListFacet');
goog.require('z.client.facet.ActionFacet');
goog.require('z.client.events');
goog.require('z.common.entities.Tile');
goog.require('z.common.rulebook.Rulebook');
goog.require('z.client.action');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.client.facet.ActionListFacet}
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.client.facet.ContextMenuFacet = function (services) {
  goog.base(this, services);

  /**
   * @type {!z.client.ActionFactory}
   * @private
   */
  this._actionFactory = /** @type {!z.client.ActionFactory} */ services.get(z.client.Resources.ACTION_FACTORY);

  /**
   * @private
   * @type {function(z.client.facet.EntityFacet=):z.client.facet.EntityFacet}
   */
  this._currentTarget = /** @type {function(z.client.facet.EntityFacet=):z.client.facet.EntityFacet} */services.get(z.client.Resources.CURRENT_TARGET);

  /**
   * @expose
   * @type {function(boolean=):boolean}
   */
  this.visible = ko.observable(false);
  /**
   * @expose
   * @type {function(goog.math.Coordinate=):goog.math.Coordinate}
   */
  this.position = ko.observable(null);
};

goog.inherits(z.client.facet.ContextMenuFacet, z.client.facet.ActionListFacet);

/**
 * @override
 */
z.client.facet.ContextMenuFacet.prototype.setParentEventTarget = function (parent) {
  goog.base(this, 'setParentEventTarget', parent);
  this.eventHandler.listen(parent, z.client.events.EventType.SHOW_CONTEXT_MENU,
      function (e) {
        this.doShowContextMenu(e.context, e.position);
      }
  );
};

/**
 * @param {Array.<!z.common.rulebook.meta>} context
 * @param {!goog.math.Coordinate} position
 */
z.client.facet.ContextMenuFacet.prototype.doShowContextMenu = function (context, position) {
  this.hide();
  this['actionFacets'].removeAll();
  if (context) {
    var actions = this._getContextualActions(context);
    if (actions.length > 0) {
      ko.utils.arrayPushAll(this['actionFacets'](), actions);
      this['actionFacets'].valueHasMutated();
      this._show(position);
    }
  }
};

/**
 * @param {Array.<!z.common.rulebook.meta>} context
 * @return {Array.<!z.client.facet.ActionFacet>} actions
 * @private
 */
z.client.facet.ContextMenuFacet.prototype._getContextualActions = function (context) {
  var actionFacets = [];
  var actionFactory = this._actionFactory;
  var actions = actionFactory.getActions(context);

  goog.array.forEach(actions, function (action) {
    if (action) {
      /**
       * @type {!z.client.facet.ActionFacet}
       */
      var actionFacet = new z.client.facet.ActionFacet(action);
      if (actionFacet[z.client.action.ArgsType.TARGET]) {
        var currentTarget = this._currentTarget();
        actionFacet[z.client.action.ArgsType.TARGET](currentTarget);
      }
      if (actionFacet['canExecute']()) {
        actionFacets.push(actionFacet);
      }
    }
  }, this);

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
