goog.provide('mugd.editor.PrimitiveViewModel');

goog.require('mugd.editor.constants');
goog.require('mugd.editor.IViewModel');
goog.require('mugd.editor.AbstractViewModel');
goog.require('goog.array');

/**
 * @param {!Object} schema
 * @param {!mugd.editor.LinkResolver} resolver
 * @extends mugd.editor.AbstractViewModel
 * @constructor
 */
mugd.editor.PrimitiveViewModel = function (schema, resolver) {
  goog.base(this, schema, resolver);
  /**
   * @type {function(string=):string}
   */
  this['value'] = ko.observable();

  var validateValueCallback = mugd.editor.PrimitiveViewModel.validateValue[this['type']];
  this['value'].subscribe(validateValueCallback);
};

goog.inherits(mugd.editor.PrimitiveViewModel, mugd.editor.AbstractViewModel);

mugd.editor.PrimitiveViewModel.prototype.toJSON = function () {
  return this['value']();
};

mugd.editor.PrimitiveViewModel.prototype['setValue'] = function (value) {
  this['value'](value);
};

/**
 * @param {!Array} path
 * @param {number=}index
 * @returns {*}
 */
mugd.editor.PrimitiveViewModel.prototype.fetchSplitPath = function (path, index) {
  if (!goog.isDef(index)) {
    index = 0;
  }

  if(index === path.length){
    return this;
  }

  if (path[index] === '') {
    return this['value']();
  }


  throw {'name': 'InvalidPathException', 'message': path};
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

mugd.editor.PrimitiveViewModel.prototype.disposeInternal = function(){
  goog.base(this, 'disposeInternal');
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

