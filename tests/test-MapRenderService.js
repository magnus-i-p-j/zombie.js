TestCase('test MapRenderService', {
  'test Should throw exception when receiving an invalid query': function () {
    var svc = z.service.MapRenderService.instance();
    var query = "¤#EE##¤";
    assertException(function(){svc.getTerrainOverlay(query)}, 'InvalidArgumentException');
  }
});

