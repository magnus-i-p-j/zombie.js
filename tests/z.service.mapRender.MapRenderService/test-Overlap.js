TestCase('test Overlap', {
  'test Should only merge directions': function () {
    var overlap = new z.service.mapRender.Overlap('grass');
    overlap.directions.push(z.service.Directions.NORTH_WEST_TERRAIN);
    var other = new z.service.mapRender.Overlap('grass');
    other.directions.push(
        z.service.Directions.NORTH_EAST_TERRAIN,
        z.service.Directions.EAST_TERRAIN);
    overlap.Merge(other);
    var expected = [z.service.Directions.NORTH_WEST_TERRAIN,
      z.service.Directions.NORTH_EAST_TERRAIN,
      z.service.Directions.EAST_TERRAIN];
    assertEquals(expected, overlap.directions);
  },
  'test should not merge overlaps with different terrain': function(){
    var overlap = new z.service.mapRender.Overlap('hills');
    overlap.directions.push(z.service.Directions.NORTH_WEST_TERRAIN);
    var other = new z.service.mapRender.Overlap('grass');
    other.directions.push(
        z.service.Directions.NORTH_EAST_TERRAIN,
        z.service.Directions.EAST_TERRAIN);
    var merged = overlap.TryMerge(other);
    var expected = [z.service.Directions.NORTH_WEST_TERRAIN];
    assertFalse(merged);
    assertEquals(expected, overlap.directions);
  },
  'test should not merge overlaps with non-neighbouring directions': function(){
    var overlap = new z.service.mapRender.Overlap('grass');
    overlap.directions.push(z.service.Directions.NORTH_WEST_TERRAIN);
    var other = new z.service.mapRender.Overlap('grass');
    other.directions.push(z.service.Directions.EAST_TERRAIN);
    var merged = overlap.TryMerge(other);
    var expected = [z.service.Directions.NORTH_WEST_TERRAIN];
    assertFalse(merged);
    assertEquals(expected, overlap.directions);
  }
});

