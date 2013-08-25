TestCase("test z.common.Cashier", {
  'test exists': function () {
    assertFunction(z.common.Cashier);
  },
  'setUp': function () {
    this.stockpile = new z.common.Stockpile();
    this.cashier = new z.common.Cashier(this.stockpile);
  },
  'test should give nothing when nothing is available': function () {
    var actual = this.cashier.withdraw({"wood": 5});

    assertEquals({"wood": 0}, actual);
  },
  'test should returns integers': function () {
    var actual = this.cashier.withdraw({"wood": 5});

    assertSame(0, actual['wood']);
  },
  'test should give all when available': function () {
    this.stockpile.add('metal', 500);
    var actual = this.cashier.withdraw({"metal": 5});

    assertEquals({"metal": 5}, actual);
  },
  'test should give available when exceeded': function () {
    this.stockpile.add('metal', 5);
    var actual = this.cashier.withdraw({"metal": 10});

    assertEquals({"metal": 5}, actual);
  },
  'test should scale down when ': function () {
    this.stockpile.add('metal', 5);
    this.stockpile.add('wood', 50);
    var actual = this.cashier.withdraw({"metal": 10, "wood": 20});

    assertEquals({"metal": 5, "wood": 10}, actual);
  },
  'test should scale to whole numbers': function () {
    this.stockpile.add('metal', 5);
    this.stockpile.add('wood', 50);
    var actual = this.cashier.withdraw({"metal": 10, "wood": 15});

    assertEquals({"metal": 5, "wood": 8}, actual);
  },
  'test should survive zero': function () {
    this.stockpile.add('metal', 5);
    this.stockpile.add('wood', 50);
    var actual = this.cashier.withdraw({"metal": 10, "wood": 0});

    assertEquals({"metal": 5, "wood": 0}, actual);
  }
});
