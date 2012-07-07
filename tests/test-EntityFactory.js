TestCase("test EntityFactory", {
  'test exists':function () {
    assertFunction(z.engine.world.EntityFactory);
  },
  setUp:function () {
    var self = this;
    this.ef = new z.engine.world.EntityFactory();
    this.oldGetGuid = z.util.getGuid;
    z.util.getGuid = function () {
      return self.retGuid;
    };
  },
  tearDown:function () {
    z.util.getGuid = this.oldGetGuid;
  },
  'test create Tile':function () {
    this.retGuid = 'test';
    var tile = this.ef.createTile(1, 2, 'grass');

    assertSame(1, tile.x);
    assertSame(2, tile.y);
    assertSame('grass', tile.terrain);
    assertSame(this.retGuid, tile.guid);
  }
});
