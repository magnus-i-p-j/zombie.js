TestCase("test EntityFactory", {
  'test exists':function () {
    assertFunction(z.common.EntityFactory);
  },
  setUp:function () {
    var self = this;
    this.ef = new z.common.EntityFactory();
    this.oldGetGuid = mugd.utils.getGuid;
    mugd.utils.getGuid = function () {
      return self.retGuid;
    };
  },
  tearDown:function () {
    mugd.utils.getGuid = this.oldGetGuid;
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
