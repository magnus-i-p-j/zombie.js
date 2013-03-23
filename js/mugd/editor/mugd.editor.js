goog.provide('mugd.editor');

goog.require('mugd.editor.PrimitiveViewModel');

/**
 * @param {!Object} schema
 * @param {*} data
 * @return {mugd.editor.IViewModel}
 */
mugd.editor.getViewModel = function (schema, data) {

  var model = mugd.editor._getModel(schema);
  model.value(data);
  return model;

};

/**
 * @param {!Object} schema
 * @return {mugd.editor.IViewModel}
 * @private
 */
mugd.editor._getModel = function (schema) {
  if (schema.type === mugd.editor.ValueType.STRING) {
    return new mugd.editor.PrimitiveViewModel(schema);
  }
};

/**
 * @enum {string}
 */
mugd.editor.ValueType = {
  'ARRAY': 'array',
  'BOOLEAN': 'boolean',
  'INTEGER': 'integer',
  'NUMBER': 'number',
  'NULL': 'null',
  'OBJECT': 'object',
  'STRING': 'string'
};