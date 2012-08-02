goog.provide('z.client.events.ShowContextMenuEvent');

z.client.events.ShowContextMenuEvent = function (source, context, position) {
  this.source = source || null;
  this.data = {context: context, position: position};
};
z.client.events.ShowContextMenuEvent.topic = 'ShowContextMenuEvent';
