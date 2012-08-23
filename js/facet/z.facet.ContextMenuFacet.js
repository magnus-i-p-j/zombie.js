goog.provide('z.facet.ContextMenuFacet');
goog.require('z.entities.Tile');
goog.require('z.rulebook.Rulebook');

z.facet.ContextMenuFacet = function (gem) {
  this.gem = gem;
  this.visible = ko.observable(false);
  this.actions = ko.observableArray();
  gem.evr.subscribe(z.client.events.ShowContextMenuEvent, goog.bind(this.showContextMenuCallback, this));
};

z.facet.ContextMenuFacet.prototype.showContextMenuCallback = function (showContextMenuEvent) {
  var ctx = showContextMenuEvent.data.context;
  if (ctx) {
    if(ctx[0].possibleActions()[0]){
      console.log(ctx[0].possibleActions()[0].title());
    }
    this._show(showContextMenuEvent.position);
  }
};

z.facet.ContextMenuFacet.prototype._show = function (position) {
  this.position = position;
  this.visible = true;
};

z.facet.ContextMenuFacet.prototype._hide = function () {
  this.show = false;
  this.position = null;
};
