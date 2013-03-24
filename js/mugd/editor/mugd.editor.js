goog.provide('mugd.editor');

goog.require('mugd.editor.PrimitiveViewModel');
goog.require('mugd.editor.ObjectViewModel');
goog.require('mugd.editor.ArrayViewModel');

/**
 * @param {!Object} schema
 * @param {*} data
 * @return {mugd.editor.IViewModel}
 */
mugd.editor.getViewModel = function (schema, data) {

  var model = mugd.editor._getModel(schema);
  model.setValue(data);
  return model;

};

/**
 * @param {!Object} schema
 * @return {mugd.editor.IViewModel}
 * @private
 */
mugd.editor._getModel = function (schema) {
  if (mugd.editor.PrimitiveViewModel.isPrimitiveValue(schema)) {
    return new mugd.editor.PrimitiveViewModel(schema);
  }
  if (mugd.editor.ObjectViewModel.isObjectValue(schema)) {
    return new mugd.editor.ObjectViewModel(schema, mugd.editor._getModel);
  }
  if (mugd.editor.ArrayViewModel.isArrayValue(schema)) {
    return new mugd.editor.ArrayViewModel(schema, function () {
      return mugd.editor._getModel(schema.items);
    });
  }
  throw {'name': 'TypeMismatchException', 'reason': 'no such type supported', 'schema': schema};
};


