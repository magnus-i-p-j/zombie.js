goog.provide('z.client.Client');

goog.require('z.engine.World');
goog.require('z.client.User');

z.client.Client = function () {
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
  this.user = new z.User();
  this.user.name = 'John Doe';
};

z.client.Client.prototype.startGame = function (gameId) {
  gameId = gameId || null;
  this.session = new z.client.GameSession();
};
