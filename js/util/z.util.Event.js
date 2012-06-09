goog.provide('z.util.Event');

z.util.Event = function (source, data) {
  this.source = source || null;
  this.data = data || {};
};
z.util.Event.topic = 'Event';