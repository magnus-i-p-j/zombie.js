goog.provide('z.engine.events.TilesUpdatedEvent');

z.engine.events.TilesUpdatedEvent = function (source, tiles) {
  this.source = source || null;
  this.data = {tiles:tiles};
};
z.engine.events.TilesUpdatedEvent.topic = 'TilesUpdatedEvent';
