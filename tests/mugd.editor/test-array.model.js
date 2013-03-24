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
  }

});