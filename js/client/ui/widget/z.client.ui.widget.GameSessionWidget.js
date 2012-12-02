goog.provide('z.client.ui.widget.GameSessionWidget');
goog.require('mugd.Injector');
goog.require('z.client');

/**
 * @param {!Element} gameDomElement
 * @param {!z.client.facet.Gem} gem
 * @param {!z.client.ui.widget.MapWidget} mapWidget
 */
z.client.ui.widget.GameSessionWidget = function (gameDomElement, gem, mapWidget) {
  this.gameDomElement = gameDomElement;
  this.gem = gem;
  this.mapWidget = mapWidget;
};

z.client.ui.widget.GameSessionWidget.prototype.claim = function () {
  ko.applyBindings(this.gem, this.gameDomElement);
  this.mapWidget.claim(goog.dom.getElement('map'));

};

z.client.WorldProxy.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.GAME_DOM_ELEMENT,
  z.client.Resources.GEM,
  z.client.Resources.MAP_WIDGET
];


