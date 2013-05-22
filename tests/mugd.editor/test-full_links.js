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

    var expected = ko.observable();
    viewModel.resolver.get('game://terrain/grass', expected);

    var actual = viewModel.value()['improvement'].value()[0].value()['required_terrain'];

    //Paranoia assert.
    assertTrue(actual instanceof mugd.editor.FullLinkViewModel);
    assertSame(expected().value()['type'].value(), actual.value());
  },
  'test basic options': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    var improvement = viewModel.value()['improvement'].value()[0];
    var options = improvement.value()['required_terrain'].options();

    assertEquals(this.data.terrain.length, options.length);
    for (var i = 0; i < options.length; ++i) {
      assertSame(this.data.terrain[i].type, options[i].value()['type'].value());
      assertSame(this.data.terrain[i].name, options[i].value()['name'].value());
    }
  },
  'test that options is updated when a model is removed': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, {});
    viewModel.setValue(this.data);

    var improvement = viewModel.value()['improvement'].value()[0];
    var options = improvement.value()['required_terrain'].options;

    var grass = viewModel.fetch('terrain/1');
    assertSame('grass', grass.fetch('type/'));
    grass.dispose();

    assertFalse(goog.array.contains(options(), grass));
  },
  'test that options is updated when a model is added': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    var improvement = viewModel.fetch('improvement/0');
    var options = improvement.fetch('required_terrain').options;

    /**
     *
     * @type {mugd.editor.ArrayViewModel}
     */
    var terrains = viewModel.fetch('terrain');
    var newModel = terrains['newItem']();
    newModel.fetch('name').value('New Model');
    newModel.fetch('type').value('new_model');
//    newModel['type']('new_model');

    assertTrue(goog.array.contains(options(), newModel));
  },
  'test should have template full-link': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    assertSame('full-link', viewModel.fetch('improvement/0/required_terrain').template());
  },
  'test should select the correct model when initialised': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    var improvementSecureGrass = viewModel.fetch('improvement/0/required_terrain');
    var terrainGrass = viewModel.fetch('terrain/1');

    assertSame(terrainGrass, improvementSecureGrass['model']());
  },
  'test should select the correct value when initialised': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);

    var improvementSecureGrass = viewModel.fetch('improvement/0/required_terrain');
    var terrainGrass = viewModel.fetch('terrain/1/type/');

    assertSame(terrainGrass, improvementSecureGrass['value']());
  }
});
