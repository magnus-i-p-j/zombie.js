goog.provide('z.client.GameSession');
goog.require('z.util.EventRouter');
goog.require('z.engine.World');

z.client.GameSession = function () {
  this.eventRouter = new z.engine.EventRouter();
  this.world = new z.engine.World();
  this.world.registerGameSession(this);
};

z.client.GameSession.prototype.worldUpdate = function (worldState) {

};