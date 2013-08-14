goog.provide('mugd.editor');

goog.require('mugd.editor.EditorViewModel');
goog.require('mugd.editor.PrimitiveViewModel');
goog.require('mugd.editor.ObjectViewModel');
goog.require('mugd.editor.ArrayViewModel');
goog.require('mugd.editor.FullLinkViewModel');
goog.require('mugd.editor.LinkResolver');

/**
 * @param {!Object} schema
 * @param {*} data
 * @return {mugd.editor.IViewModel}
 */
mugd.editor.getViewModel = function (schema, data) {
  var resolver = new mugd.editor.LinkResolver();
  var model = mugd.editor._getModel(schema, resolver);
  model['setValue'](data);
  return model;
};

/**
 * @param {!Object} schema
 * @return {mugd.editor.IViewModel}
 * @private
 * @param resolver
 */
mugd.editor._getModel = function (schema, resolver) {
  if (mugd.editor.FullLinkViewModel.isFullLinkValue(schema)) {
    return new mugd.editor.FullLinkViewModel(schema, resolver);
  }
  if (mugd.editor.PrimitiveViewModel.isPrimitiveValue(schema)) {
    return new mugd.editor.PrimitiveViewModel(schema, resolver);
  }
  if (mugd.editor.ObjectViewModel.isObjectValue(schema)) {
    return new mugd.editor.ObjectViewModel(schema, resolver, mugd.editor._getModel);
  }
  if (mugd.editor.ArrayViewModel.isArrayValue(schema)) {
    return new mugd.editor.ArrayViewModel(schema, resolver, function () {
      return mugd.editor._getModel(schema['items'], resolver);
    });
  }
  throw {'name': 'TypeMismatchException', 'reason': 'no such type supported', 'schema': schema};
};

/**
 * @param {!Element} rootNode
 */
mugd.editor.init = function (rootNode) {
  infuser.defaults.templatePrefix = 'tpl/editor/';
  var vm = new mugd.editor.EditorViewModel();
  ko.applyBindings(vm, rootNode);
};

goog.exportSymbol('editor.init', mugd.editor.init);


