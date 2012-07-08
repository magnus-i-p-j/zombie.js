goog.provide('z.client.events.EndTurnEvent');

z.client.events.EndTurnEvent = function (source) {
  this.source = source || null;
  this.data = {};
};
z.client.events.EndTurnEvent.topic = 'EndTurnEvent';
