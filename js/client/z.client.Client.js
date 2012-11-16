goog.provide('z.client.Client');

goog.require('goog.dom');
goog.require('goog.net.XhrIo');
goog.require('z.engine.World');
goog.require('z.client.User');
goog.require('z.client.GameSession');
goog.require('z.widget.MapWidget');
goog.require('z.facet.Gem');
goog.require('z.rulebook.Rulebook');

z.client.Client = function (targetId) {
  this.login();
  this.targetElement = goog.dom.getElement(targetId);
};

z.client.Client.prototype.run = function () {
  // todo: 1. Show main menu
  // todo: 2. Choose game state
  // todo: 3. Start game.

  goog.net.XhrIo.send('../js/rulebook/ruleset.json', goog.bind(function (e) {
    var ruleset = e.target.getResponseJson();
    console.log('ruleset', ruleset);
    this.startGame(ruleset);
  }, this));
};

z.client.Client.prototype.login = function () {
  // todo: 0. login user
  this.user = new z.client.User();
  this.user.name = 'John Doe';
};

z.client.Client.prototype.startGame = function (ruleset) {
  this.rulebook = new z.rulebook.Rulebook(ruleset);
  this.world = new z.engine.World(this.rulebook);
  this.session = new z.client.GameSession(this.world);



  var mapWidget = new z.widget.MapWidget(this.session.evr, this.session.gem);
  mapWidget.claim('map');
  ko.applyBindings(this.session.gem, this.targetElement);



};
