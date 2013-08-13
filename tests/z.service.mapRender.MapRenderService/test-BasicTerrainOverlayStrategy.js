TestCase('test BasicTerrainOverlayStrategy', {
  setUp: function () {
    this.terrains = {'water': 0, 'grass': 1, 'hills': 2, 'forest': 3};
    this.strategy = new z.service.mapRender.BasicTerrainOverlayStrategy(this.terrains);
  }

});

