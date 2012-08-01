goog.provide('z.widget.MapWidget');

goog.require('z.facet.MapFacet');
goog.require('goog.events');
goog.require('goog.dom.query');
goog.require('goog.math');
goog.require('goog.math.Coordinate');

z.widget.MapWidget = function (facet) {
    this.facet = facet;
    this.facet.offsetX(-10 * 72);
    this.facet.offsetY(-10 * (72 - 18));
};

z.widget.MapWidget.prototype.template = '' + '<div data-bind="foreach: visibleTiles" class="map_widget">' + '<div data-bind="attr: { class: terrain() + \' \' + isSelected() + \' tile\', \'data-x\': x, \'data-y\': y }, style: { top: $parent.computeScreenPositionY($data), left: $parent.computeScreenPositionX($data) }">' + '<div class="center_text">' + '(<span data-bind="text: x"></span>, <span data-bind="text: y"></span>)' + '</div>' + '</div>' + '</div>';

z.widget.MapWidget.prototype.claim = function (targetId) {
    var targetElement = document.getElementById(targetId);
    targetElement.innerHTML = this.template;

    goog.events.listen(targetElement.firstChild, goog.events.EventType.CLICK, this.onTileClicked, true, this);

    ko.applyBindings(this.facet, targetElement);
};

z.widget.MapWidget.prototype.onTileClicked = function (e, element) {

    if (element === e.currentTarget || !e.target) {
        goog.events.Event.stopPropagation(e);
    }
    else {
        element = element || e.target;
        var classNames = element.className.split(' ');
        if (element.dataset.x && element.dataset.y && goog.array.contains(classNames, "tile")) {
            var adjacent = this.facet.getAdjacent(parseInt(element.dataset.x), parseInt(element.dataset.y));
            var elements = goog.array.map(adjacent, function(a){
                return goog.dom.query('div[data-x = '+ a.x +'][data-y = ' + a.y + ']', e.currentTarget)[0];
            });
            elements.push(element);

            var selected = this.findClosestElement(new goog.math.Coordinate(e.clientX, e.clientY), elements);
            alert(selected.dataset.x);
        }
        else {
            this.onTileClicked(e, element.parentElement);
        }
    }

};

z.widget.MapWidget.prototype.getCenter = function(element){
    var rect = element.getBoundingClientRect();
    var x = rect.left + rect.width/2;
    var y = rect.bottom + rect.height/2;
    return new goog.math.Coordinate(x, y);
};

z.widget.MapWidget.prototype.findClosestElement = function(center, elements){
    var closestElement = elements.pop();
    var shortestDistance = goog.math.Coordinate.distance(center, this.getCenter(closestElement));
    goog.array.forEach(elements, function(element){
        var currentDistance = goog.math.Coordinate.distance(center, this.getCenter(element));
        if(currentDistance < shortestDistance){
            shortestDistance = currentDistance;
            closestElement = element;
        }
    });
};