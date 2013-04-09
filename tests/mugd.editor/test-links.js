TestCase("test links", {
  data: {
    "terrain": [
      {
        "type": "fenced_grass",
        "name": "Fenced grass"
      },
      {
        "type": "grass",
        "name": "Grass"
      },
      {
        "type": "water",
        "name": "Water"
      }
    ],
    "improvement": [
      {
        "type": "secure_grass",
        "name": "Secure grass",
        "required_terrain": "grass"
      }
    ]
  },
  schema: {
    "title": "Concepts",
    "description": "The stuff people walk on.",
    "type": "object",
    "properties": {
      "terrain": {
        "title": "Terrains",
        "description": "The stuff people walk on.",
        "type": "array",
        "items": {
          "title": "Terrain",
          "description": "Some sort of stuff to walk on.",
          "type": "object",
          "properties": {
            "type": {
              "title": "Unique id",
              "type": "string"
            },
            "name": {
              "title": "Name",
              "description": "Visible name of terrain",
              "type": "string"
            }
          },
          "links": {
            "rel": "self",
            "href": "game://terrain/{type}"
          }
        }
      },
      "improvement": {
        "title": "Improvements",
        "description": "Change things for the better",
        "type": "array",
        "items": {
          "title": "Improvement",
          "description": "A project that improves a tile",
          "type": "object",
          "properties": {
            "type": {
              "title": "Unique id",
              "type": "string"
            },
            "name": {
              "title": "Name",
              "description": "Visible name of project",
              "type": "string"
            },
            "required_terrain": {
              "title": "Required Terrain",
              "description": "The terrain that must be there",
              "type": "string",
              "links": {
                "rel": "full",
                "href": "game://terrain/{@}"
              }
            }
          }
        }
      }
    }
  },
  'test schema validates': function () {
    var valid = tv4.validate(this.data, this.schema);
    if (!valid) {
      assert(JSON.stringify(tv4.error, null, 4), valid);
    }
  },
  'test can fetch object by link': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);
    var expected = viewModel.value()['terrain'].value()[2];

    var actual = viewModel.resolver.get('game://terrain/water');

    assertSame(expected, actual.model());
    assertSame('game://terrain/water', actual.uri());
  },
  'test can fetch non-existing uri': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, {});

    var actual = viewModel.resolver.get('game://terrain/water');

    assertSame('game://terrain/water', actual.uri());
  },
  'test can fetch non-existing uri twice': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, {});

    var first = viewModel.resolver.get('game://terrain/water');
    var second = viewModel.resolver.get('game://terrain/water');

    assertSame(first.model(), second.model());
  },
  'test can fetch uri in advance': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, {});
    var actual = viewModel.resolver.get('game://terrain/water');

    viewModel.setValue(this.data);
    var expected = viewModel.value()['terrain'].value()[2];

    assertSame(expected, actual.model());
  }
});
