goog.provide('z.engine.events.TileFocusEvent');

z.engine.events.TileFocusEvent = function (source, tile) {
  this.source = source || null;
  this.data = {tile:tile};
};
z.engine.events.TileFocusEvent.topic = 'TileFocusEvent';
