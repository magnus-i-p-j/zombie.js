TestCase("test mugd.editor object model", {
  data: {"age": 23, "firstname": "Pelle"},
  schema: {
    "description": "Test 2",
    "title": "Test 1",
    "type": "object",
    "properties": {
      "firstname": {
        "description": "Test 4",
        "title": "Test 5",
        "type": "string"
      },
      "age": {
        "description": "Test 8",
        "title": "Test 9",
        "type": "number"
      }
    }
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
  'test creates Model with type object': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertSame(mugd.editor.constants.ValueType.OBJECT, viewModel.type());
  },
  'test can fetch name from model': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertSame('Pelle', viewModel.value().firstname.value());
  },
  'test can iterate over properties': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    for (var i in this.schema.properties) {
      if (this.schema.properties.hasOwnProperty(i)) {
        var value = this.schema.properties[i];
        var model = goog.array.find(viewModel.properties(),
            function (model) {
              if (value.description !== model.description()) {
                return false;
              }
              if (value.title !== model.title()) {
                return false;
              }
              if (value.type !== model.type()) {
                return false;
              }
              return true;
            }
        );
        // TODO: Check that this is actually a good model
        assert(!!model);
      }
    }
  }
});

TestCase("test mugd.editor nested object model", {
  data: {"age": 23, "firstname": "Pelle",
    "buddy": {
      "nickname": "Buddy"
    }
  },
  schema: {
    "description": "Test 2",
    "title": "Test 1",
    "type": "object",
    "properties": {
      "firstname": {
        "description": "Test 4",
        "title": "Test 5",
        "type": "string"
      },
      "age": {
        "description": "Test 8",
        "title": "Test 9",
        "type": "number"
      },
      "buddy": {
        "description": "Desc",
        "title": "title",
        "type": "object",
        "properties": {
          "nickname": {
            "type": "string",
            "description": "A nickname",
            "title": "Nicky"
          }
        }
      }
    }
  },
  setUp: function () {
    var valid = tv4.validate(this.data, this.schema);
    if (!valid) {
      assert(JSON.stringify(tv4.error, null, 4), valid);
    }
  },
  'test can fetch nickname from nested model': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertSame("Buddy", viewModel.value().buddy.value().nickname.value());
  }
});