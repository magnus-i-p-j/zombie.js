TestCase('test Grid', {
  'setUp':function () {
    this.grid = new z.util.Grid();
  },
  'tearDown':function () {
    delete this.grid;
  },
  'test setting and getting a node':function () {
    var nodeIn = {};
    var x = 125, y = -12;

    this.grid.setNode(x, y, nodeIn);
    var nodeOut = this.grid.getNode(x, y);

    assertSame(nodeIn, nodeOut);
  },
  'test get a node by id':function () {
    var guid = 'pellet';
    var nodeIn = {guid:guid};
    var x = 125, y = -12;
    this.grid.setNode(x, y, nodeIn);

    var nodeOut = this.grid.getNodeById(guid);

    assertSame(nodeIn, nodeOut);
  },
  'test get non-existant node by id':function () {
    var guid = 'pellet';

    var nodeOut = this.grid.getNodeById(guid);

    assertNull(nodeOut);
  },

  'test getting adjacent nodes for y = 0':function () {
    for (var i = -10; i < 10; ++i) {
      for (var j = -10; j < 10; ++j) {
        var node = {};
        this.grid.setNode(i, j, node);
      }
    }

    var x = 0, y = 0;
    var origin = this.grid.getNode(x, y);

    var actualAdjacent = this.grid.getAdjacent(x, y);
    var expectedAdjacent = [
        {x: x, y: y - 1}, {x: x + 1, y: y - 1}, {x: x + 1, y: y}, {x: x + 1, y: y + 1}, {x: x, y: y + 1}, {x: x - 1, y: y}];

    assertSame(expectedAdjacent.length, actualAdjacent.length);
    for (i = 0; i < expectedAdjacent.length; i++) {
      assertEquals(expectedAdjacent[i].x, actualAdjacent[i].x);
      assertEquals(expectedAdjacent[i].y, actualAdjacent[i].y);
    }
  },
  'test getting adjacent nodes for y = 1':function () {
    for (var i = -10; i < 10; ++i) {
      for (var j = -10; j < 10; ++j) {
        var node = {};
        this.grid.setNode(i, j, node);
      }
    }

    var x = 1, y = 1;
    var origin = this.grid.getNode(x, y);

    var actualAdjacent = this.grid.getAdjacent(x, y);
    var expectedAdjacent = [
        {x: x - 1, y: y - 1}, {x: x, y: y - 1}, {x: x + 1, y: y}, {x: x, y: y + 1}, {x: x - 1, y: y + 1}, {x: x - 1, y: y}
    ];

    assertSame(expectedAdjacent.length, actualAdjacent.length);
    for (i = 0; i < expectedAdjacent.length; i++) {
      assertSame(expectedAdjacent[i].x, actualAdjacent[i].x);
      assertSame(expectedAdjacent[i].y, actualAdjacent[i].y);
    }
  }

});
