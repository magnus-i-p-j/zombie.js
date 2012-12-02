goog.provide('z.client.Client');

goog.require('goog.dom');
goog.require('goog.net.XhrIo');
goog.require('goog.events.EventTarget');

goog.require('z.client');

goog.require('z.common.rulebook.Rulebook');
goog.require('z.client.WorldProxy');

goog.require('z.client.User');
goog.require('z.client.GameSession');
goog.require('z.client.facet.Gem');

z.client.Client = function (targetId) {
  this.login();
  this.targetElement = goog.dom.getElement(targetId);
};

goog.inherits(z.client.Client, goog.events.EventTarget);

z.client.Client.prototype.run = function () {
  // todo: 1. Show main menu
  // todo: 2. Choose game state
  // todo: 3. Start game.

  goog.net.XhrIo.send('../js/rulebook/ruleset.json', goog.bind(function (e) {
    var ruleset = e.target.getResponseJson();
    console.log('ruleset', ruleset);
    this.startNewGame(ruleset);
  }, this));
};

z.client.Client.prototype.login = function () {
  // todo: 0. login user
  this.user = new z.client.User();
  this.user.name = 'John Doe';
};

z.client.Client.prototype.startNewGame = function (ruleset) {

  var injector = new mugd.Injector();
  injector.addResource(z.client.RULESET, ruleset);
  injector.addResource(z.client.WORLD_URL, '#'); // TODO: add server
  injector.addProvider(z.client.WORLD, z.client.WorldProxy);
  injector.addProvider(z.client.RULEBOOK, z.common.rulebook.Rulebook);
  injector.addProvider(z.client.MAP_WIDGET, z.widget.MapWidget);

  this.session = injector.create(z.client.GameSession);

  this.session.start();
};
