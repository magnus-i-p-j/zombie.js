goog.provide('mugd.editor.PrimitiveViewModel');

goog.require('mugd.editor.constants');
goog.require('mugd.editor.IViewModel');
goog.require('goog.array');

/**
 * @implements mugd.editor.IViewModel
 * @constructor
 */
mugd.editor.PrimitiveViewModel = function (schema) {
  /**
   * @type {function(string=):string}
   */
  this['title'] = ko.observable(schema['title']);
  /**
   * @type {function(string=):string}
   */
  this['description'] = ko.observable(schema['description']);
  /**
   * @type {function(string=):string}
   */
  this['type'] = ko.observable(schema['type']);
  /**
   * @type {function(string=):string}
   */
  this['value'] = ko.observable();

  var validateValueCallback = mugd.editor.PrimitiveViewModel.validateValue[this['type']()];
  this['value'].subscribe(validateValueCallback);
};

mugd.editor.PrimitiveViewModel.prototype.setValue = function (value) {
  this['value'](value);
};

mugd.editor.PrimitiveViewModel.isPrimitiveValue = function (schema) {
  return goog.array.contains([
    mugd.editor.constants.ValueType.STRING,
    mugd.editor.constants.ValueType.NUMBER
//      mugd.editor.constants.ValueType.STRING,
//      mugd.editor.constants.ValueType.STRING
  ],
      schema['type']
  );
};

mugd.editor.PrimitiveViewModel.validateValue = {};
mugd.editor.PrimitiveViewModel.validateValue[mugd.editor.constants.ValueType.STRING] = function (value) {
  if (!goog.isString(value)) {
    throw {'name': 'TypeMismatchException', 'reason': 'Expected string', 'value': value};
  }
};
mugd.editor.PrimitiveViewModel.validateValue[mugd.editor.constants.ValueType.NUMBER] = function (value) {
  if (!goog.isNumber(value)) {
    throw {'name': 'TypeMismatchException', 'reason': 'Expected number', 'value': value};
  }
};

//Just for no errors
mugd.editor.PrimitiveViewModel.prototype.value = function () {
};
mugd.editor.PrimitiveViewModel.prototype.title = function () {
};
mugd.editor.PrimitiveViewModel.prototype.type = function () {
};
mugd.editor.PrimitiveViewModel.prototype.description = function () {
};
