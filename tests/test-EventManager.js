TestCase('test EventManager', {
    setUp:function () {
        this.evm = z.util.EventManager();
    },
    'test EventManager exists':function () {
        assertFunction(z.util.EventManager);
    },
    'test notified about subscribed event':function () {
        var called = false;
        var callback = function () {
            called = true;
        };
        var topic = 'this topic';

        this.evm.subscribe(topic, callback);
        this.evm.publish(topic);

        assert(called);
    },
    'test incoming event is published event':function () {
        var incomingEvent = null;
        var callback = function (e) {
            incomingEvent = e;
        };
        var topic = 'this topic';
        var publishedEvent = new z.util.Event(topic);

        this.evm.subscribe(topic, callback);
        this.evm.publish(topic);

        assert(publishedEvent, incomingEvent);
    }
});