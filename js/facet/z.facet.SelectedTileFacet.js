goog.provide('z.facet.SelectedTileFacet');

z.facet.SelectedTileFacet = function(evr, map){
    this.selected = ko.observable();
    this.map = map;
    this.evr = evr;
    this.evr.subscribe(z.client.events.TileFocusEvent, this.tileFocusCallback.bind(this));
};

z.facet.SelectedTileFacet.prototype.tileFocusCallback = function(tileFocusEvent){
    this.selected( tileFocusEvent.data.tileFacet );
}