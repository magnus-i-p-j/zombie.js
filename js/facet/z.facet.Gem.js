goog.provide('z.facet.Gem');

goog.require('z.facet.MapFacet');
goog.require('z.facet.ContextMenuFacet');



/**
 * @param {!z.util.EventRouter} evr
 * @param map
 * @param {!z.rulebook.Rulebook} rulebook
 */
z.facet.Gem = function (evr, map, rulebook) {
  this.evr = evr;
  this.contextMenuFacet = new z.facet.ContextMenuFacet(this, rulebook);

  this.rulebook = rulebook;

  //Should we only have a MapFacet here?
  this.map = map;
  this.mapFacet = new z.facet.MapFacet(this, map);

  this.focusedTile = ko.observable();

  //Events
  this.evr.subscribe(z.client.events.TileFocusEvent, this.tileFocusCallback.bind(this));
};

z.facet.Gem.prototype.tileFocusCallback = function (tileFocusEvent) {
  this.focusedTile(tileFocusEvent.data.tileFacet);
};