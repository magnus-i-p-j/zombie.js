TestCase("test mugd.editor creates correct string model", {
  data: 'must be string',
  schema: {
    "description": "Test",
    "title": "Test",
    "type": "string"
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
  'test creates Model with type string': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertSame(this.schema['type'], viewModel.type);
  },
  'test creates Model with correct string data': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertSame(this.data, viewModel.value());
  },
  "test throws exception for non string value": function () {
    var schema = this.schema;
    var data = true;
    assertException(function () {
      mugd.editor.getViewModel(schema, data);
    }, 'TypeMismatchException');
  },
  'test to JSON returns correct string': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertSame(this.data, viewModel.toJSON());
  },
  'test fetch returns string value when empty': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertSame('must be string', viewModel.fetch('/'));
  },
  'test fetch throws exception when not empty': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertException(function () {
      viewModel.fetch('royale');
    }, 'InvalidPathException');
  }
});
