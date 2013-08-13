TestCase('test TerrainOverlayQuery', {
  'setUp': function () {
    this.terrains = {'water': 0, 'grass': 1, 'hills': 2, 'forest': 3};
  },
  'test Should throw exception when receiving an invalid query': function () {
    var query = "¤#EE##¤";
    assertException(function () {
      new z.service.mapRender.TerrainOverlayQuery(this.terrains, query)
    }, 'InvalidQueryStringException');
  },
  'test Should throw exception when receiving an unparsable query': function () {
    var query = "?a=b";
    assertException(function () {
      new z.service.mapRender.TerrainOverlayQuery(this.terrains, query)
    }, 'InvalidQueryStringException');
  },
  'test Should order overlaps clockwise': function () {
    var queryString = '?c=grass&nw=water&ne=hills&e=water&se=hills&sw=hills&w=hills';
    var query = new z.service.mapRender.TerrainOverlayQuery(this.terrains, queryString);
    var overlaps = query.getOverlaps();
    assertEquals({terrain: 'hills', directions: ['ne']}, overlaps[0]);
    assertEquals({terrain: 'hills', directions: ['se', 'sw', 'w']}, overlaps[1]);
    assertEquals(2, overlaps.length);
  },
  'test Should get all overlaps': function () {
    var queryString = '?c=grass&nw=water&ne=hills&e=water&se=hills&sw=hills&w=hills';
    var query = new z.service.mapRender.TerrainOverlayQuery(this.terrains, queryString);
    var overlaps = query.getOverlaps();
    assertEquals({terrain: 'hills', directions: ['ne']}, overlaps[0]);
    assertEquals({terrain: 'hills', directions: ['se', 'sw', 'w']}, overlaps[1]);
    assertEquals(2, overlaps.length);
  },
  'test Should join overlap that wraps around': function () {
    var queryString = '?c=grass&nw=hills&ne=hills&e=water&se=hills&sw=hills&w=hills';
    var query = new z.service.mapRender.TerrainOverlayQuery(this.terrains, queryString);
    var overlaps = query.getOverlaps();
    assertEquals({terrain: 'hills', directions: ['se', 'sw', 'w', 'nw', 'ne']}, overlaps[0]);
    assertEquals(1, overlaps.length);
  },

  'test Should join overlap that wraps around but only if they are of the same type': function () {
    var queryString = '?c=grass&nw=forest&ne=hills&e=water&se=hills&sw=hills&w=hills';
    var query = new z.service.mapRender.TerrainOverlayQuery(this.terrains, queryString);
    var overlaps = query.getOverlaps();
    assertEquals([
      ['nw'],
      ['ne'],
      ['se', 'sw', 'w']
    ], overlaps);
    assertEquals(3, overlaps.length);
  }
});

