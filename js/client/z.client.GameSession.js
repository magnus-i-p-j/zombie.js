goog.provide('z.client.GameSession');
goog.require('z.util.EventRouter');
goog.require('z.client.Map');
goog.require('z.client.events.TilesUpdatedEvent');
goog.require('z.client.events.EndTurnEvent');

z.client.GameSession = function (world) {
//  this.world = world;
  this.map = new z.client.Map(world);
  this.gem = new z.facet.Gem(this.map, this.rulebook);
};

z.client.GameSession.prototype.worldUpdate = function (worldState) {
  this.evr.publish(new z.client.events.TilesUpdatedEvent(this, worldState.tiles));
};

z.client.GameSession.prototype.endTurnCallback = function (endTurnEvent) {
  this.world.endTurn();
};
