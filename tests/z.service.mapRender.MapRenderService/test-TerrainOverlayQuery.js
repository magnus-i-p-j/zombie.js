TestCase('test TerrainOverlayQuery', {
  'setUp': function(){
    this.terrains = {'water': 0, 'grass': 1, 'hills': 2, 'forest': 3};
  },
  'test Should throw exception when receiving an invalid query': function () {
    var query = "¤#EE##¤";
    assertException(function(){new z.service.mapRender.TerrainOverlayQuery(this.terrains, query)}, 'InvalidQueryStringException');
  },
  'test Should throw exception when receiving an unparsable query': function () {
    var query = "?a=b";
    assertException(function(){new z.service.mapRender.TerrainOverlayQuery(this.terrains,query)}, 'InvalidQueryStringException');
  },
  'test Should order overlaps clockwise' : function(){
    var queryString = '?c=grass&nw=water&ne=hills&e=water&se=hills&sw=hills&w=hills';
    var query = new z.service.mapRender.TerrainOverlayQuery(this.terrains, queryString);
    var overlaps = query.getOverlaps();
    //assertEquals(2, overlaps.length);
    assertEquals({terrain:'hills', directions: ['ne']}, overlaps[0]);
    assertEquals({terrain:'hills', directions: ['se','sw','w']}, overlaps[1]);
  }
});

