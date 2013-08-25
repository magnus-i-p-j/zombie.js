TestCase("test z.common.Stockpile", {
  'test exists': function () {
    assertFunction(z.common.Stockpile);
  },
  'setUp': function () {
    this.stockpile = new z.common.Stockpile();
    this.stockpile.add('wood');
    this.stockpile.add('metal');
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
    this.stockpile.addAll({'metal': 22});

    var actual = this.stockpile['metal'].peek();
    assertSame(22, actual);
  },
  'test should subtract current': function () {
    this.stockpile.addAll({'metal': 2, 'wood': 5});

    var actual = this.stockpile.diffAll({'wood': 10, 'metal': 0});
    assertEquals({'wood': 5, 'metal': -2}, actual);
  },
  'test should return current value': function () {
    this.stockpile.addAll({'wood': 5, 'metal': 8});

    var actual = this.stockpile.peekAll();
    assertEquals({'wood': 5, 'metal': 8}, actual);
  },
  'test should purge': function () {
    this.stockpile.addAll({'metal': 2, 'wood': 5});
    this.stockpile.purgeAll();

    assertSame(0, this.stockpile['wood'].peek());
    assertSame(0, this.stockpile['metal'].peek());
  },
  'test should default to zero amount when resource is unknown': function () {
    var diff = this.stockpile.diff('scrap', 5);
    assertSame(5, diff);
  },
  'test should take nothing when nothing is available': function () {
    var actual = this.stockpile.take('scrap', 5);
    assertSame(0, actual);
  },
  'test should take requested': function () {
    this.stockpile.add('scrap', 50);
    var actual = this.stockpile.take('scrap', 5);
    assertSame(5, actual);
    assertSame(45, this.stockpile.peek('scrap'));
  },
  'test should take as much as possible when scarce': function () {
    this.stockpile.add('scrap', 3);
    var actual = this.stockpile.take('scrap', 3);
    assertSame(3, actual);
    assertSame(0, this.stockpile.peek('scrap'));
  }
});
