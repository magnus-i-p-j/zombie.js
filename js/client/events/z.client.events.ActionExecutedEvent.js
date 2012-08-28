goog.provide('z.client.events.ActionExecutedEvent');

z.client.events.ActionExecutedEvent = function (source, actionresult) {
  this.source = source || null;
  this.data = {actionResult: _actionresult};
};
z.client.events.ActionExecutedEvent.topic = 'ActionExecutedEvent';
