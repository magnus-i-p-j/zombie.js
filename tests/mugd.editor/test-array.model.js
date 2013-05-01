TestCase("test mugd.editor array model", {
  data: ["age", "23", "firstname", "Pelle"],
  schema: {
    "description": "Test 2",
    "title": "Test 1",
    "type": "array",
    "items": {
      "description": "Test 4",
      "title": "Test 5",
      "type": "string"
    }
  },
  'test base schema/data is valid': function () {
    var valid = tv4.validate(this.data, this.schema);
    if (!valid) {
      assert(JSON.stringify(tv4.error, null, 4), valid);
    }
  },
  'test model is populated with data': function () {
    var model = mugd.editor.getViewModel(this.schema, this.data);

    goog.array.forEach(this.data, function (value, index) {
      assertSame(value, model.value()[index].value())
    });
  },
  'test add new item': function () {
    var model = mugd.editor.getViewModel(this.schema, this.data);
    var expected = 'Höggren';

    var initialLength = model.value().length;
    var newItem = model.newItem();
    newItem.value(expected);

    var actual = model.value()[model.value().length - 1];

    assertSame(initialLength + 1, model.value().length);
    assertSame(expected, actual.value());
  },
  'test to JSON returns correct array': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertEquals(this.data, viewModel.toJSON());
  },
  'test array disposes all children when disposed': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);
    var children = [];

    goog.array.map(viewModel.value(), function (model) {
      children.push(model);
    });

    viewModel.dispose();

    goog.array.forEach(children, function (child) {
      assertTrue(child.isDisposed())
    }, this);
  },
  'test array removes child when child disposed': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    var dyingChild = viewModel.value()[1];

    dyingChild.dispose();

    assertFalse(goog.array.contains(viewModel.value(), dyingChild));
  },
  'test fetch returns correct values': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertSame('age', viewModel.fetch('0/'));
    assertSame('23', viewModel.fetch('1/'));
    assertSame('firstname', viewModel.fetch('2/'));
    assertSame('Pelle', viewModel.fetch('3/'));
  },
  'test fetch returns correct models': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);
    var expected = viewModel.value()[3];
    assertSame(expected, viewModel.fetch('3'));
  },
  'test fetch throws exception when path invalid': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertException(function () {
      viewModel.fetch('4');
    }, 'InvalidPathException');
    assertException(function () {
      viewModel.fetch('buddy/hatename');
    }, 'InvalidPathException');
  }
});