"use strict";

goog.provide('z.facet.MapFacet');

z.facet.MapFacet = function () {
  this.visibleTiles = ko.observableArray();
};

z.facet.MapFacet.prototype.setMap = function () {
  if (this.map) {
    throw 'Cannot set map more than once';
  } else {
    this.map = true;
  }
};