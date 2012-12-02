goog.provide('z.client.facet.Gem');
goog.require('z.client.facet.MapFacet');
goog.require('z.client.facet.ContextMenuFacet');



/**
 * @param {!mugd.utils.EventRouter} evr
 * @param map
 * @param {!z.common.rulebook.Rulebook} rulebook
 */
z.client.facet.Gem = function (evr, map, rulebook) {
  this.evr = evr;
  this.contextMenuFacet = new z.client.facet.ContextMenuFacet(this, rulebook);

  this.rulebook = rulebook;

  //Should we only have a MapFacet here?
  this.map = map;
  this.mapFacet = new z.client.facet.MapFacet(this, map);

  this.focusedTile = ko.observable();

  //Events
  this.evr.subscribe(z.client.events.TileFocusEvent, this.tileFocusCallback.bind(this));
};

z.client.facet.Gem.prototype.tileFocusCallback = function (tileFocusEvent) {
  this.focusedTile(tileFocusEvent.data.tileFacet);
};