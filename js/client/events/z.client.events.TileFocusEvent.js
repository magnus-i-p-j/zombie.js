goog.provide('z.client.events.TileFocusEvent');

z.client.events.TileFocusEvent = function (source, tile) {
  this.source = source || null;
  this.data = {tile:tile};
};
z.client.events.TileFocusEvent.topic = 'TileFocusEvent';
