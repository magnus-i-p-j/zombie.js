TestCase("test mugd.editor creates correct number model", {
  data: 1.42,
  schema: {
    "description": "Test 2",
    "title": "Test 1",
    "type": "number"
  },
  setUp: function () {
    var valid = tv4.validate(this.data, this.schema);
    if (!valid) {
      assert(JSON.stringify(tv4.error, null, 4), valid);
    }
  },

  'test exists mugd.editor.getViewModel': function () {
    assertFunction(mugd.editor.getViewModel);
  },
  'test creates Model with title': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertSame(this.schema['title'], viewModel.title());
  },
  'test creates Model with description': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertSame(this.schema['description'], viewModel.description());
  },
  'test creates Model with type number': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertSame(mugd.editor.constants.ValueType.NUMBER, viewModel.type);
  },
  'test creates Model with correct number ': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertSame(this.data, viewModel.value());
  },
  "test throws exception for non number value": function () {
    var schema = this.schema;
    var data = true;
    assertException(function () {
      mugd.editor.getViewModel(schema, data);
    }, 'TypeMismatchException');
  },
  "test throws exception for string non number value": function () {
    var schema = this.schema;
    var data = "584 fm";
    assertException(function () {
      mugd.editor.getViewModel(schema, data);
    }, 'TypeMismatchException');
  },
  "test should return number for number string": function () {
    var viewModel = mugd.editor.getViewModel(this.schema, "584");
    assertSame(584, viewModel.value());
  },
  'test to JSON returns correct number': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertSame(this.data, viewModel.toJSON());
  }
});
