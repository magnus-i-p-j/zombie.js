goog.provide('z.widget.MapWidget');

goog.require('z.facet.MapFacet');
goog.require('goog.events');
goog.require('goog.dom.query');
goog.require('goog.math');
goog.require('goog.math.Coordinate');
goog.require('z.client.events.TileFocusEvent');

z.widget.MapWidget = function (facet, evr) {
    this.facet = facet;
    this.evr = evr;
    this.facet.offsetX(-10 * 72);
    this.facet.offsetY(-10 * (72 - 18));
};

z.widget.MapWidget.prototype.template = '' +
'<div class="map_widget">' +
    '<div data-bind="foreach: visibleTiles">' +
    '<div data-bind="attr: { class: terrain() + \' tile\', \'data-x\': x, \'data-y\': y }, style: { top: $parent.computeScreenPositionY($data), left: $parent.computeScreenPositionX($data) }">' +
        '<div class="center_text">' +
            '(<span data-bind="text: x"></span>, <span data-bind="text: y"></span>)' +
        '</div>' +
    '</div>' +
    '</div>' +
    '<div class="tile focusedTile" data-bind="visible: focusedTileFacet.focused, style: { top: focusedTileFacet.focused() ? computeScreenPositionY(focusedTileFacet.focused()) : 0, left: focusedTileFacet.focused() ? computeScreenPositionX(focusedTileFacet.focused()) : 0 }"></div>' +
'</div>';


z.widget.MapWidget.prototype.claim = function (targetId) {
    this.targetElement = document.getElementById(targetId);
    this.targetElement.innerHTML = this.template;

    goog.events.listen(this.targetElement.firstChild, goog.events.EventType.CLICK, this.onTileClicked, true, this);

    goog.events.listen(this.targetElement.firstChild, goog.events.EventType.CONTEXTMENU, this.onTileClicked, true, this);


    this.preventDefaults();
    ko.applyBindings(this.facet, this.targetElement);
};

z.widget.MapWidget.prototype.preventDefaults = function () {
    //Stop trying to drag pictures.
    goog.events.listen(this.targetElement.firstChild, goog.events.EventType.MOUSEDOWN, goog.events.Event.preventDefault, false);
    //Prevent standard context menu from showing.
    goog.events.listen(this.targetElement.firstChild, goog.events.EventType.CONTEXTMENU, goog.events.Event.preventDefault, false);
};

z.widget.MapWidget.prototype.onFocusedTileClicked = function(e){
    console.log("!");
}

z.widget.MapWidget.prototype.onTileClicked = function (e, element) {
    if (element !== e.currentTarget && e.target)  {
        element = element || e.target;
        var classNames = element.className.split(' ');
        if (goog.array.contains(classNames, 'focusedTile')){
            var focused = this.facet.focusedTileFacet.focused();
            element = goog.dom.query('div[data-x = '+ focused.x +'][data-y = ' + focused.y + ']', this.targetElement.firstChild)[0];
        }
        if (element.dataset.x && element.dataset.y && goog.array.contains(classNames, "tile")) {
            var adjacent = this.facet.getAdjacent(parseInt(element.dataset.x), parseInt(element.dataset.y));
            var elements = goog.array.map(adjacent, function(a){
                return goog.dom.query('div[data-x = '+ a.x +'][data-y = ' + a.y + ']', e.currentTarget)[0];
            });
            elements.push(element);

            var selected = this.findClosestElement(new goog.math.Coordinate(e.clientX, e.clientY), elements);
            console.log(selected.dataset.x + ';' + selected.dataset.y);
            this.evr.publish(new z.client.events.TileFocusEvent(this, this.facet.getTileFacet(parseInt(selected.dataset.x), parseInt(selected.dataset.y))));
        }
        else {
            this.onTileClicked(e, element.parentElement);
        }
    }
};

z.widget.MapWidget.prototype.getClientCenter = function(element){
    var rect = element.getBoundingClientRect();
    var x = rect.left + rect.width/2;
    var y = rect.bottom - rect.height/2;
    return new goog.math.Coordinate(x, y);
};

z.widget.MapWidget.prototype.findClosestElement = function(center, elements){
    var closestElement = elements.pop();
    var shortestDistance = goog.math.Coordinate.distance(center, this.getClientCenter(closestElement));
    var self = this;
    goog.array.forEach(elements, function(element){
        if(element){
            var currentDistance = goog.math.Coordinate.distance(center, self.getClientCenter(element));
            if(currentDistance < shortestDistance){
                shortestDistance = currentDistance;
                closestElement = element;
            }
        }
    });
    return closestElement;
};