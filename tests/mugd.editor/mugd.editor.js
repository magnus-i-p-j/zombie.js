TestCase("test mugd.editor", {
  'test exists mugd.editor.getViewModel': function () {
    assertFunction(mugd.editor.getViewModel);
  },
  'test creates Model with title': function () {
    var data = {};
    var schema = {
//      "type": "string",
      "title": "Test"
    };

    var valid = tv4.validate(data, schema);
    if (!valid) {
      assert(JSON.stringify(tv4.error, null, 4), valid);
    }

    var viewModel = mugd.editor.getViewModel(schema, data);
    assertSame('Test', viewModel.title());
  },
  'test creates Model with description': function () {
    var data = {};
    var schema = {
      "description": "Test"
    };

    var valid = tv4.validate(data, schema);
    if (!valid) {
      assert(JSON.stringify(tv4.error, null, 4), valid);
    }

    var viewModel = mugd.editor.getViewModel(schema, data);
    assertSame('Test', viewModel.description());
  },
  'test creates Model with type string': function () {
    var data = 'test string';
    var schema = {
      "type": "string"
    };

    var valid = tv4.validate(data, schema);
    if (!valid) {
      assert(JSON.stringify(tv4.error, null, 4), valid);
    }

    var viewModel = mugd.editor.getViewModel(schema, data);
    assertSame('string', viewModel.type());
  },
  'test creates Model with correct strong data': function () {
    var data = 'test string';
    var schema = {
      "type": "string"
    };

    var valid = tv4.validate(data, schema);
    if (!valid) {
      assert(JSON.stringify(tv4.error, null, 4), valid);
    }

    var viewModel = mugd.editor.getViewModel(schema, data);
    assertSame(data, viewModel.value());
  }
});
