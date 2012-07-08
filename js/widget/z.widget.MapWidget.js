goog.provide('z.widget.MapWidget');

goog.require('z.facet.MapFacet');

z.widget.MapWidget = function (facet) {
  this.facet = facet;
  this.facet.offsetX(-10 * 72);
  this.facet.offsetY(-10 * (72 - 18));
};

z.widget.MapWidget.prototype.template = '' + '<div data-bind="foreach: visibleTiles" class="map_widget">' + '<div data-bind="attr: { class: terrain() + \' tile\' }, style: { top: $parent.computeScreenPositionY($data), left: $parent.computeScreenPositionX($data) }">' + '<div class="center_text">' + '(<span data-bind="text: x"></span>, <span data-bind="text: y"></span>)' + '</div>' + '</div>' + '</div>';

z.widget.MapWidget.prototype.claim = function (targetId) {
  var targetElement = document.getElementById(targetId);
  targetElement.innerHTML = this.template;
  ko.applyBindings(this.facet, targetElement);
};

