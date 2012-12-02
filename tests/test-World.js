TestCase("test World", {
  'test exists':function () {
    assertFunction(z.service.World);
  },
  setUp:function () {
    this.world = new z.service.World();
  },
  'test registerGameSession':function () {
    var called = false;
    var mockGameSession = {
      worldUpdate:function (worldState) {
        called = true;
      }
    };

    this.world.registerGameSession(mockGameSession);

    assert(called);
  }
});
