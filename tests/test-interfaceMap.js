var interfaceMap = function (cls) {
  var TestMap = z.engine[cls];
  var fullClass = 'z.engine.' + cls;
  var t = {
    'test has method getTiles':function () {
      var map = new TestMap();

      assertFunction(map.getTiles);
    },
    'test has method getTile':function () {
      var map = new TestMap();

      assertFunction(map.getTile);
    },

    'test getTile returns a tile':function () {
      var map = new TestMap();

      var tile = map.getTile(0, 0);

      assertString(tile.terrain);
    },

    'test getTile updates data':function () {
      var map = new TestMap();
      map.feed([
        { c:1, r:2, terrain:'grass' }
      ]);

      var actual = map.getTile(1, 2);

      assertEquals('grass', actual.terrain);
    },
    'not test yet test getAdjacent':function () {
      // TODO: fisnish test
      var map = new TestMap();
      var c, r, center;
      c = 9;
      r = 2;

      center = map.getTile(c, r);

      var actualAdjacent = map.getAdjacent(center);
      var expectedAdjacent = [
        map.getTile(c - 1, r + 1), map.getTile(c, r + 1), map.getTile(c + 1, r), map.getTile(c + 1, r - 1), map.getTile(c, r - 1), map.getTile(c - 1, r)
      ];
      assertEquals(expectedAdjacent, actualAdjacent);
    }
  };

  t['test ' + fullClass + 'exists'] = function () {
    assertFunction(TestMap);
  };

  TestCase('test ' + fullClass, t);
};

