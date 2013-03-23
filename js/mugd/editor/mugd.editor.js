goog.provide('mugd.editor');

goog.require('mugd.editor.PrimitiveViewModel');
goog.require('mugd.editor.ObjectViewModel');

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
  if (mugd.editor.PrimitiveViewModel.isPrimitiveValue(schema)) {
    return new mugd.editor.PrimitiveViewModel(schema);
  }
  if (mugd.editor.ObjectViewModel.isObjectValue(schema)) {
    return new mugd.editor.ObjectViewModel(schema, mugd.editor._getModel);
  }
  throw {'name': 'TypeMismatchException', 'reason': 'no such type supported', 'schema': schema};
};


