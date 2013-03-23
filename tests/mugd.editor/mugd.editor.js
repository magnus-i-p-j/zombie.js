TestCase("test mugd.editor creates correct string model", {
  'test exists mugd.editor.getViewModel': function () {
    assertFunction(mugd.editor.getViewModel);
  },
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

    assertSame(this.schema['type'], viewModel.type());
  },
  'test creates Model with correct string this.data': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertSame(this.data, viewModel.value());
  }
});
