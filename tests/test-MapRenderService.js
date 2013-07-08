TestCase('test MapRenderService', {
  'test Should throw exception when receiving an invalid query': function () {
    var svc = z.service.mapRender.MapRenderService.instance();
    var query = "¤#EE##¤";
    assertException(function(){svc.getTerrainOverlay(query)}, 'InvalidQueryStringException');
  },
  'test Should throw exception when receiving an unparsable query': function () {
    var svc = z.service.mapRender.MapRenderService.instance();
    var query = "?a=b";
    assertException(function(){svc.getTerrainOverlay(query)}, 'InvalidQueryStringException');
  }
});

