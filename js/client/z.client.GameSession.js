goog.provide('z.client.GameSession');

goog.require('mugd.injector.Injector');
goog.require('z.client');

/**
 * @param {!z.client.WorldProxy} world
 * @param {!z.client.ui.widget.GameSessionWidget} mainWidget
 * @param {!Element} gameDomElement
 * @constructor
 */
z.client.GameSession = function (world, mainWidget, gameDomElement) {
  this.world = world;
  this.mainWidget = mainWidget;
  this.gameDomElement = gameDomElement;
};

z.client.GameSession.prototype[mugd.injector.Injector.DEPS] = [
  z.client.Resources.WORLD,
  z.client.Resources.GAME_SESSION_WIDGET,
  z.client.Resources.GAME_DOM_ELEMENT
];


z.client.GameSession.prototype.start = function () {
  this.mainWidget.claim(this.gameDomElement);
  this.world.firstTurn();
};