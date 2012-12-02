TestCase('test EventRouter', {
  setUp:function () {
    this.evm = mugd.utils.EventRouter();
  },
  'test EventRouter exists':function () {
    assertFunction(mugd.utils.EventRouter);
  },
  'test notified about subscribed event':function () {
    var called = false;
    var callback = function () {
      called = true;
    };
    var event = new mugd.utils.test.TestEvent();

    this.evm.subscribe(mugd.utils.test.TestEvent, callback);
    this.evm.publish(event);

    assert(called);
  },
  'test incoming event is published event':function () {
    var incomingEvent = null;
    var callback = function (e) {
      incomingEvent = e;
    };
    var publishedEvent = new mugd.utils.test.TestEvent();

    this.evm.subscribe(mugd.utils.test.TestEvent, callback);
    this.evm.publish(publishedEvent);

    assert(publishedEvent === incomingEvent);
  }
});