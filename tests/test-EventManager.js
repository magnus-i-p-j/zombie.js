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
    var event = new z.util.test.TestEvent();

    this.evm.subscribe(z.util.test.TestEvent, callback);
    this.evm.publish(event);

    assert(called);
  },
  'test incoming event is published event':function () {
    var incomingEvent = null;
    var callback = function (e) {
      incomingEvent = e;
    };
    var publishedEvent = new z.util.test.TestEvent();

    this.evm.subscribe(z.util.test.TestEvent, callback);
    this.evm.publish(publishedEvent);

    assert(publishedEvent === incomingEvent);
  }
});