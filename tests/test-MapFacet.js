TestCase("test MapFacet", {
  setUp:function () {
    this.mf = new z.facet.MapFacet();
  },
  'test exists':function () {
    assertFunction(z.facet.MapFacet);
  },
  'test has property visibleTiles':function () {
    assert(!!this.mf.visibleTiles);
  },
  'test has setMap method':function () {
    assertFunction(this.mf.setMap);
  },
  'test cannot set map more than once':function () {
    var mf = this.mf;
    assertException(function () {
      mf.setMap();
      mf.setMap()
    });
  }
});
