goog.provide('z.editor.ruleset.Schema');

// todo: look at: http://json-schema.org/examples.html

/**
 * @param schema
 * @constructor
 */
z.editor.ruleset.Schema = function (schema) {
  this._schema = schema;
  for (var concept in schema) {
    if (schema.hasOwnProperty(concept)) {
      var conceptSchema = this.loadConcept(concept);
    }
  }
};

z.editor.ruleset.Schema.prototype.loadConcept = function (concept) {
//  var i;
//  var conceptSchema = {};
//  var conceptSchemaSources = [this._schema[concept]];
//  if (conceptSchemaSources[0]['inherits']) {
//    for (i in conceptSchemaSources[0]['inherits']) {
//      if (conceptSchemaSources[0]['inherits'].hasOwnProperty(i)) {
//
//      }
//    }
//  }
//  for (i in conceptSchemaSource) {
//    if (conceptSchemaSource.hasOwnProperty(i)) {
//
//    }
//  }
};