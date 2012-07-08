TestCase("test World", {
  'test exists':function () {
    assertFunction(z.engine.World);
  },
  setUp:function () {
    this.world = new z.engine.World();
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
