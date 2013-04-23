goog.provide('mugd.editor.ArrayViewModel');

goog.require('mugd.editor.constants');
goog.require('mugd.editor.IViewModel');
goog.require('mugd.editor.AbstractViewModel');
goog.require('goog.array');

/**
 * @param {!Object} schema
 * @param {!mugd.editor.LinkResolver} resolver
 * @param createSubModel
 * @extends mugd.editor.AbstractViewModel
 * @constructor
 */
mugd.editor.ArrayViewModel = function (schema, resolver, createSubModel) {
  goog.base(this, schema, resolver);

  this._createSubModelCallback = createSubModel;

  /**
   * @type {function(string=):string}
   */
  this['value'] = ko.observableArray();
};
goog.inherits(mugd.editor.ArrayViewModel, mugd.editor.AbstractViewModel);

mugd.editor.ArrayViewModel.prototype['newItem'] = function () {
  var model = this._createSubModel();
  this['value'].push(model);
  return model;
};

mugd.editor.ArrayViewModel.prototype.toJSON = function () {
  return goog.array.map(this['value'](),
      function (value) {
        return value.toJSON();
      }
  );
};

mugd.editor.ArrayViewModel.prototype.setValue = function (dataArray) {
  var newValue = goog.array.map(
      dataArray,
      function (data) {
        var model = this._createSubModel();
        model.setValue(data);
        return model;
      },
      this
  );
  this['value'](newValue);
};

/**
 * @param {Array} path
 * @param {int=} index
 * @returns {*}
 */
mugd.editor.ArrayViewModel.prototype.fetchSplitPath = function (path, index) {
  if (!goog.isDef(index)) {
    index = 0;
  }
  var head = path[index];
  var value = this.value();
  if (value[head]) {
    return value[head].fetchSplitPath(path, index + 1);
  }
  throw {'name': 'InvalidPathException', 'message': path};
};

mugd.editor.ArrayViewModel.prototype._createSubModel = function () {
  var newModel = this._createSubModelCallback();
  newModel.addOnDisposeCallback(this._createSubModelDisposedCallback(newModel), this);
  return newModel;
};

mugd.editor.ArrayViewModel.prototype.disposeInternal = function () {
  goog.array.forEach(this.value(), function (model) {
    model.dispose();
  })
};

mugd.editor.ArrayViewModel.prototype._createSubModelDisposedCallback = function (subModel) {
//  console.log(subModel);
//  console.log(this);
  return function () {
    this.value.remove(subModel);
  };
};

mugd.editor.ArrayViewModel.isArrayValue = function (schema) {
  return schema.type === mugd.editor.constants.ValueType.ARRAY;
};

mugd.editor.ArrayViewModel.toString = function () {
  return 'mugd.editor.ArrayViewModel';
};
/**
 * @deprecated
 * @param target
 * @param createSubModel
 * @returns {*}
 */
ko.extenders.arrayValue = function (target, createSubModel) {
  var result = ko.computed({
    'read': target,
    'write': function (newValue) {
      target(newValue);
    }
  });
  result.push = goog.bind(target.push, target);
  return target;
};

