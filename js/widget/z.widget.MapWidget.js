"use strict";

goog.provide('z.widget.MapWidget');

goog.require('z.facet.MapFacet');

z.widget.MapWidget = function () {
};

z.widget.MapWidget.prototype.template = '<div class="map_widget"></div>';

z.widget.MapWidget.prototype.claim = function (targetId) {
  var targetElement = document.getElementById(targetId);
  targetElement.innerHTML = this.template;
};
