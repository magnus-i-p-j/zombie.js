TestCase("test self links", {
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

    var actual = ko.observable();
    viewModel.resolver.get('game://terrain/water', actual);

    assertSame(expected, actual());
  },
  'test can fetch non-existing uri': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, {});

    var called = false;
    var callback = function(){
      called = true;
    };
    viewModel.resolver.get('game://terrain/water', callback);

    assertFalse(called);
  },
  'test can fetch uri in advance': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, {});
    var actual = ko.observable();
    viewModel.resolver.get('game://terrain/water', actual);

    viewModel.setValue(this.data);
    var expected = viewModel.value()['terrain'].value()[2];

    assertSame(expected, actual());
  },
  'test can fetch multiple times in advance' : function() {
    var viewModel = mugd.editor.getViewModel(this.schema, {});

    var first = ko.observable();
    viewModel.resolver.get('game://terrain/water', first);
    var second = ko.observable();
    viewModel.resolver.get('game://terrain/water', second);

    viewModel.setValue(this.data);

    assertSame(first(), second());
  },
  'test that resolver reports if any links are still unresolved' : function(){
    var viewModel = mugd.editor.getViewModel(this.schema, {});
    var actual = ko.observable();
    viewModel.resolver.get('game://terrain/water', actual);

    assertSame(1, viewModel.resolver.numUnresolved());

    viewModel.setValue(this.data);

    assertSame(0, viewModel.resolver.numUnresolved());
  }
});
