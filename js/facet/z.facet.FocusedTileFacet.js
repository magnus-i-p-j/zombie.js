goog.provide('z.facet.FocusedTileFacet');

z.facet.FocusedTileFacet = function(evr, map){
    this.focused = ko.observable();
    this.map = map;
    this.evr = evr;
    this.evr.subscribe(z.client.events.TileFocusEvent, this.tileFocusCallback.bind(this));
};

z.facet.FocusedTileFacet.prototype.tileFocusCallback = function(tileFocusEvent){
    this.focused( tileFocusEvent.data.tileFacet );
}