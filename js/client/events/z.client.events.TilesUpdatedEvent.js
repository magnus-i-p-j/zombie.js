goog.provide('z.client.events.TilesUpdatedEvent');

z.client.events.TilesUpdatedEvent = function (source, tiles) {
  this.source = source || null;
  this.data = {tiles:tiles};
};
z.client.events.TilesUpdatedEvent.topic = 'TilesUpdatedEvent';
