goog.provide('z.client.ui.widget.MapWidget');

goog.require('goog.events');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('goog.math');
goog.require('goog.math.Coordinate');
goog.require('mugd.ui.MapScroller');
goog.require('mugd.Injector');
goog.require('z.client');

z.client.ui.widget.MapWidget = function (mapFacet, gem) {
  this._mapFacet = mapFacet;
  this._gem = gem;
};

z.client.ui.widget.MapWidget.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.MAP_FACET,
  z.client.Resources.GEM
];

z.client.ui.widget.MapWidget.prototype.claim = function (targetElement) {
  this.targetElement = targetElement;

  goog.events.listen(this.targetElement, goog.events.EventType.CLICK, this.onTileClicked, true, this);

  goog.events.listen(this.targetElement, goog.events.EventType.CONTEXTMENU, this.onTileClicked, true, this);
  goog.events.listen(this.targetElement, goog.events.EventType.CONTEXTMENU, this.onShowContextMenu, true, this);

  new mugd.ui.MapScroller(this.targetElement, goog.partial(goog.dom.getElement, 'map_scroll'));

  // Prevent standard context menu from showing.
  goog.events.listen(this.targetElement, goog.events.EventType.CONTEXTMENU, goog.events.Event.preventDefault, false);
};

z.client.ui.widget.MapWidget.prototype.onTileClicked = function (e) {
  var element = this.findTileElement(e);
  if (element) {
    var adjacent = this._mapFacet.getAdjacent(parseInt(element.dataset.x), parseInt(element.dataset.y));
    var elements = goog.array.map(adjacent, function (a) {
      return goog.dom.query('div[data-x = ' + a.x + '][data-y = ' + a.y + ']', e.currentTarget)[0];
    });
    elements.push(element);

    var selected = this.findClosestElement(new goog.math.Coordinate(e.clientX, e.clientY), elements);

  }
};

z.client.ui.widget.MapWidget.prototype.findTileElement = function (e, element) {
  if (element !== e.currentTarget && e.target) {
    element = element || e.target;

    if (goog.dom.classes.has(element, 'focusedTile')) {
      var focused = this._gem.focusedTile();
      element = goog.dom.query('div[data-x = ' + focused.x + '][data-y = ' + focused.y + ']', this.targetElement.firstChild)[0];
    }

    if (element.dataset.x && element.dataset.y && goog.dom.classes.has(element, 'tile')) {
      return element;
    } else {
      return this.findTileElement(e, element.parentElement);
    }
  }
};

z.client.ui.widget.MapWidget.prototype.getClientCenter = function (element) {
  var rect = goog.style.getBounds(element);
  var x = rect.left + rect.width / 2;
  var y = rect.bottom - rect.height / 2;
  return new goog.math.Coordinate(x, y);
};

z.client.ui.widget.MapWidget.prototype.findClosestElement = function (center, elements) {
  var closestElement = elements.pop();
  var shortestDistance = goog.math.Coordinate.distance(center, this.getClientCenter(closestElement));
  var self = this;
  goog.array.forEach(elements, function (element) {
    if (element) {
      var currentDistance = goog.math.Coordinate.distance(center, self.getClientCenter(element));
      if (currentDistance < shortestDistance) {
        shortestDistance = currentDistance;
        closestElement = element;
      }
    }
  });
  return closestElement;
};

z.client.ui.widget.MapWidget.prototype.onShowContextMenu = function (e) {
  var element = this.findTileElement(e);
  if (element) {
    var facet = this._mapFacet.getTileFacet(parseInt(element.dataset.x), parseInt(element.dataset.y));
//    this.evr.publish(new z.client.events.ShowContextMenuEvent(this, [facet], new goog.math.Coordinate(e.clientX, e.clientY)));
  }
};