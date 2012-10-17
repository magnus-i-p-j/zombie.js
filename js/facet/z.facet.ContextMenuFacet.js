goog.provide('z.facet.ContextMenuFacet');
goog.require('z.entities.Tile');
goog.require('z.rulebook.Rulebook');
goog.require('goog.array')          ;

z.facet.ContextMenuFacet = function (gem) {
  this.gem = gem;
  this.visible = ko.observable(false);
  this.actions = ko.observableArray();
  gem.evr.subscribe(z.client.events.ShowContextMenuEvent, goog.bind(this.showContextMenuCallback, this));
};

z.facet.ContextMenuFacet.prototype.showContextMenuCallback = function (showContextMenuEvent) {
  this._hide();
  this.actions.removeAll();
  var ctx = showContextMenuEvent.data.context;
  if (ctx) {
    var specifications = this._getContextualActions(ctx);
    goog.array.forEach(specifications, function(s){
      var facet = new z.client.facet.ActionFacet(this.gem, this, s);
      this.actions.push(facet);
    } , this);
    this._show(showContextMenuEvent.position);
  }
};

z.facet.ContextMenuFacet.prototype._getContextualActions = function(ctx){
  var actions = [];
  //The rulebook should be exposed via the session. And the session should be accessible globally.
  var rulebook = this.gem.rulebook;
  goog.array.forEach(ctx, function(c){
    actions.concat(rulebook.getActionSpecifications(c));
  });
  return actions;
};

z.facet.ContextMenuFacet.prototype._show = function (position) {
  this.position = position;
  this.visible = true;
};

z.facet.ContextMenuFacet.prototype._hide = function () {
  this.show = false;
  this.position = null;
};
