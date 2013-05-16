TestCase("test Test schema", {
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
            "terrain": {
              "title": "Terrain",
              "description": "The terrain that is required",
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
    ], "improvement": [
      {
        "type": "secure_grass",
        "name": "Secure grass"
      }
    ]
  },
  'test should be able to instantiate the test model': function () {
    var viewModel = mugd.editor.getViewModel(this.schema, this.data);
  }
});
