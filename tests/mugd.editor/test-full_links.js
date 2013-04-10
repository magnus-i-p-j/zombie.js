TestCase("test full links", {
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
  'test basic full link': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    var expected = viewModel.resolver.get('game://terrain/grass');

    var actual = viewModel.value()['improvement'].value()[0].value()['required_terrain'];

    assertSame(expected, actual.model());
    assertSame('game://terrain/water', actual.uri());
  }
});
