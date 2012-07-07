TestCase('test Tile', {
  'test Tile sets terrain to constructor parameter':function () {
    var tile1 = new z.entities.Tile(1, 2, 3, 'grass');
    var tile2 = new z.entities.Tile(4, 5, 6, 'ocean');

    assertEquals('grass', tile1.terrain);
    assertEquals('ocean', tile2.terrain);

  },
  'test non css terrain type throws exception':function () {
    assertException(function () {
      new z.entities.Tile(1, 2, 3, 'this is not a css class');
    }, 'Not a css class');
  }
});

