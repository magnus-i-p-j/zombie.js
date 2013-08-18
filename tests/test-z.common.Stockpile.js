TestCase("test z.common.Stockpile", {
  'test exists': function () {
    assertFunction(z.common.Stockpile);
  },
  'setUp': function () {
    var injector = new mugd.injector.Injector();
    var ruleset = {"terrain": [], "improvement": [], "actor": [], "stockpile": [
      {
        "type": "wood",
        "name": "Wood",
        "description": "Wooden stuff"
      },
      {
        "type": "metal",
        "name": "Metal",
        "description": "Shiny!!!"
      }
    ], "artifact": [], "personnel": []};
    injector.addResource(z.common.Resources.RULESET, ruleset);
    injector.addProvider(z.common.Resources.RULEBOOK, z.common.rulebook.Rulebook);
    this.stockpile = injector.Compose(z.common.Stockpile).New();
  },
  'test should stock wood': function () {
    this.stockpile['wood'].add(5);

    assertSame(5, this.stockpile['wood'].peek());
  },
  'test should stock no wood initially': function () {
    assertSame(0, this.stockpile['wood'].peek());
  },
  'test should stock metal initially': function () {
    assertSame(0, this.stockpile['metal'].peek());
  },
  'test should take metal successfully': function () {

    var actual = this.stockpile['metal'].take(6);
    assertSame(0, actual);
  },
  'test should take some wood successfully': function () {
    this.stockpile['wood'].add(15);

    var actual = this.stockpile['wood'].take(6);
    var left = this.stockpile['wood'].peek();
    assertSame(6, actual);
    assertSame(9, left);
  },
  'test should round floats up': function () {
    this.stockpile['metal'].add(22);

    var actual = this.stockpile['metal'].take(6.1);
    assertSame(7, actual);
  },
  'test should add object to separate properties': function () {
    this.stockpile.add({'metal': 22});

    var actual = this.stockpile['metal'].peek();
    assertSame(22, actual);
  },
  'test should subtract current': function () {
    this.stockpile.add({'metal': 2, 'wood': 5});

    var actual = this.stockpile.diff({'wood': 10, 'metal': 0});
    assertEquals({'wood': 5, 'metal': -2}, actual);
  },
  'test should return current value': function () {
    this.stockpile.add({'wood': 5, 'metal': 8});

    var actual = this.stockpile.peek();
    assertEquals({'wood': 5, 'metal': 8}, actual);
  },
  'test should purge': function () {
    this.stockpile.add({'metal': 2, 'wood': 5});
    this.stockpile.purge();

    assertSame(0, this.stockpile['wood'].peek());
    assertSame(0, this.stockpile['metal'].peek());
  }

});