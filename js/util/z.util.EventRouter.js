goog.provide('z.util.EventRouter');

z.util.EventRouter = function () {
  return {
    _subscribedEvents:{},
    _initEventQueue:function (topic) {
      this._subscribedEvents[topic] = this._subscribedEvents[topic] || [];
    },
    subscribe:function (event, callback) {
      var topic = event.topic;
      this._initEventQueue(topic);
      this.unsubscribe(topic, callback);
      this._subscribedEvents[topic].push(callback);
    },
    unsubscribe:function (event, callback) {
      var topic = event.topic;
      this._initEventQueue(topic);
      var idx = this._subscribedEvents[topic].indexOf(callback);
      while (idx !== -1) {
        this._subscribedEvents[topic].splice(idx, 1);
        idx = this._subscribedEvents[topic].indexOf(callback);
      }
    },
    publish:function (publishedEvent) {
      var topic = publishedEvent.constructor.topic;
      this._initEventQueue(topic);
      var events = this._subscribedEvents[topic].slice(0);
      for (var i in events) {
        if (events.hasOwnProperty(i)) {
          var callback = events[i];
          try {
            callback(publishedEvent);
          } catch (e) {
            this.log(e);
          }
        }
      }
    },
    log:function (value) {
    }
  };
};
