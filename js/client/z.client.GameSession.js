goog.provide('z.client.GameSession');

goog.require('mugd.injector.Injector');
goog.require('z.client');
goog.require('mugd.injector.IInjectable');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements {mugd.injector.IInjectable}
 */
z.client.GameSession = function (services) {
  /**
   * @type {!z.client.WorldProxy}
   */
  this.world = /** @type {!z.client.WorldProxy} */ services.get(z.client.Resources.WORLD);

  /**
   * @type {!z.client.ui.widget.GameSessionWidget}
   */
  this.mainWidget = /** @type {!z.client.ui.widget.GameSessionWidget} */ services.get(z.client.Resources.GAME_SESSION_WIDGET);
  /**
   * @type {!HTMLElement}
   */
  this.gameDomElement = /** @type {!HTMLElement} */services.get(z.client.Resources.GAME_DOM_ELEMENT);
};

z.client.GameSession.prototype.start = function () {
  this.mainWidget.claim(this.gameDomElement);
  this.world.firstTurn();
};