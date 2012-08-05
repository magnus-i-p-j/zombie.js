goog.provide('z.client.Client');

goog.require('z.engine.World');
goog.require('z.client.User');
goog.require('z.client.GameSession');
goog.require('z.widget.MapWidget');
goog.require('z.facet.Gem');

z.client.Client = function (targetId) {
  this.login();
};

z.client.Client.prototype.run = function () {
  // todo: 1. Show main menu
  // todo: 2. Choose game state
  // todo: 3. Start game.

  this.startGame();
};

z.client.Client.prototype.login = function () {
  // todo: 0. login user
  this.user = new z.client.User();
  this.user.name = 'John Doe';
};

z.client.Client.prototype.startGame = function (gameId) {
  gameId = gameId || null;
  this.session = new z.client.GameSession();

  //TODO: Refactor to a factory?
  //TODO: Should the session really be creating the map and event router? Shouldn't this be injected.?
  var gem = new z.facet.Gem(this.session.evr, this.session.map);
  var mapWidget = new z.widget.MapWidget(this.session.evr, gem);

  mapWidget.claim('map');
  ko.applyBindings(gem, this.targetElement);
};
