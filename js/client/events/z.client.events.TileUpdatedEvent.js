goog.provide('z.client.events.TileUpdatedEvent');

z.client.events.TileUpdatedEvent = function (source, x, y) {
  this.source = source || null;
  this.data = {x:x, y:y};
};
z.client.events.TileUpdatedEvent.topic = 'TileUpdatedEvent';
