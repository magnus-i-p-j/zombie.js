goog.provide('z.client.events.TileFocusEvent');

z.client.events.TileFocusEvent = function (source, tileFacet) {
  this.source = source || null;
  this.data = {tileFacet: tileFacet};
};
z.client.events.TileFocusEvent.topic = 'TileFocusEvent';
