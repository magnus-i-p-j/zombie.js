goog.provide('z.client.ui.widget.GameSessionWidget');
goog.require('mugd.Injector');
goog.require('z.client');

/**
 * @param {!z.client.facet.Gem} gem
 * @param {!z.client.ui.widget.MapWidget} mapWidget
 * @constructor
 */
z.client.ui.widget.GameSessionWidget = function ( gem, mapWidget) {
  this.gem = gem;
  this.mapWidget = mapWidget;
};

z.client.ui.widget.GameSessionWidget.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.GEM,
  z.client.Resources.MAP_WIDGET
];

/**
 * @param {!Element} gameDomElement
 */
z.client.ui.widget.GameSessionWidget.prototype.claim = function (gameDomElement) {
  ko.applyBindings(this.gem, gameDomElement);
  this.mapWidget.claim(goog.dom.getElement('map'));
};




