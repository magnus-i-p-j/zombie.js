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
            "name": {              "title": "Name",
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

    var expected = ko.observable();
    viewModel.resolver.get('game://terrain/grass', expected);

    var actual = viewModel.value()['improvement'].value()[0].value()['required_terrain'];

    //Paranoia assert.
    assertTrue(actual instanceof mugd.editor.FullLinkViewModel);
    assertSame(expected().value()['type'].value(), actual.value());
  },
  'test basic options' : function() {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    var improvement = viewModel.value()['improvement'].value()[0];
    var options = improvement.value()['required_terrain'].options();

    assertEquals(this.data.terrain.length, options.length);
    for(var i = 0; i < options.length; ++i){
      assertSame(this.data.terrain[i].type, options[i].value()['type'].value() );
      assertSame(this.data.terrain[i].name, options[i].value()['name'].value() );
    }
  },
  'test that options is updated when an uri is changed' : function() {
    var viewModel = mugd.editor.getViewModel(this.schema, {});
    viewModel.setValue(this.data);

    var improvement = viewModel.value()['improvement'].value()[0];
    var options = improvement.value()['required_terrain'].options();

    var expected = viewModel.value()['terrain'].value()[1].value();
    expected['type'].value('safe_grass');
    expected['name'].value('Safe Grass');

    assertEquals(this.data.terrain.length, options.length);

    var actual = goog.array.find(options, function(option){
      var type = option.value()['type'].value();
      return type === 'grass' ||  type === 'safe_grass';
    });

    assertSame(actual, expected);
  }
});
