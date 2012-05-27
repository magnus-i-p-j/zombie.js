var z = z || {};
z.util = z.util || {};

z.util.EventManager = function () {
    return {
        _subscribedEvents:{},
        _initEventQueue:function (event) {
            this._subscribedEvents[event] = this._subscribedEvents[event] || [];
        },
        subscribe:function (topic, callback) {
            this._initEventQueue(topic);
            this.unsubscribe(topic, callback);
            this._subscribedEvents[topic].push(callback);
        },
        unsubscribe:function (topic, callback) {
            this._initEventQueue(topic);
            var idx = this._subscribedEvents[topic].indexOf(callback);
            while (idx !== -1) {
                this._subscribedEvents[topic].splice(idx, 1);
                idx = this._subscribedEvents[topic].indexOf(callback);
            }
        },
        publish:function (publishedEvent) {
            var topic = publishedEvent.topic;
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
