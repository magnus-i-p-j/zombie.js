TestCase('test BasicTerrainOverlayStrategy', {
  setUp: function () {
    this.terrains = {'water': 0, 'grass': 1, 'hills': 2, 'forest': 3};
    this.strategy = new z.service.mapRender.BasicTerrainOverlayStrategy(this.terrains);
  },
  'test Should get all overlaps': function () {
    var queryString = '?c=grass&nw=water&ne=hills&e=water&se=hills&sw=hills&w=hills';
    var query = new z.service.mapRender.TerrainOverlayQuery(queryString);
    var overlaps = this.strategy._getOverlaps(query);
    assertEquals(2, overlaps.length);
    assertEquals(['ne'], overlaps[0]);
    assertEquals(['se','sw','w'], overlaps[1]);
  },
  'test Should join overlap that wraps around': function(){
    var queryString = '?c=grass&nw=hills&ne=hills&e=water&se=hills&sw=hills&w=hills';
    var query = new z.service.mapRender.TerrainOverlayQuery(queryString);
    var overlaps = this.strategy._getOverlaps(query);
    assertEquals(1, overlaps.length);
    assertEquals(['se','sw','w','nw','ne'], overlaps[0]);
  },
  'test Should join overlap that wraps around but only if they are of the same type': function(){
    var queryString = '?c=grass&nw=forest&ne=hills&e=water&se=hills&sw=hills&w=hills';
    var query = new z.service.mapRender.TerrainOverlayQuery(queryString);
    var overlaps = this.strategy._getOverlaps(query);
    assertEquals(3, overlaps.length);
    assertEquals([['nw'],['ne'],['se','sw','w']], overlaps);
  }

});

