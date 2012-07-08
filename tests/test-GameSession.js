TestCase("test GameSession", {
  'test exists':function () {
    assertFunction(z.client.GameSession);
  },

  setUp:function () {
    this.gs = new z.client.GameSession();
  },
  'test worldUpdate exists':function () {
    assertFunction(this.gs.worldUpdate);
  },
  'test update world':function () {
    this.gs.worldUpdate({tiles:[]});
  }
});
