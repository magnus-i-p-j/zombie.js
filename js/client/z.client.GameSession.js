goog.provide('z.client.GameSession');
goog.require('z.util.EventRouter');
goog.require('z.engine.World');
goog.require('z.client.Map');
goog.require('z.client.events.TilesUpdatedEvent');
goog.require('z.client.events.EndTurnEvent');

z.client.GameSession = function () {
  this.evr = new z.util.EventRouter();
  this.world = new z.engine.World();
  this.map = new z.client.Map(this.evr);
  this.world.registerGameSession(this);
  this.evr.subscribe(z.client.events.EndTurnEvent, this.endTurnCallback.bind(this));
};

z.client.GameSession.prototype.worldUpdate = function (worldState) {
  this.evr.publish(new z.client.events.TilesUpdatedEvent(this, worldState.tiles));
};

z.client.GameSession.prototype.endTurnCallback = function (endTurnEvent) {
  this.world.endTurn();
};
