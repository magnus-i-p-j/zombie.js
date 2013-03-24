goog.provide('mugd.editor.ArrayViewModel');

goog.require('mugd.editor.constants');
goog.require('mugd.editor.IViewModel');
goog.require('mugd.editor.AbstractViewModel');
goog.require('goog.array');

/**
 * @implements mugd.editor.IViewModel
 * @extends mugd.editor.AbstractViewModel
 * @constructor
 */
mugd.editor.ArrayViewModel = function (schema, createSubModel) {
  goog.base(this, schema);

  this._createSubModel = createSubModel;
  this['newItem'] = function () {
    var model = this._createSubModel();
    this['value'].push(model);
    return model;
  };
  /**
   * @type {function(string=):string}
   */
  this['value'] = ko.observableArray();
};
goog.inherits(mugd.editor.ArrayViewModel, mugd.editor.AbstractViewModel);

mugd.editor.ArrayViewModel.prototype.toJSON = function () {
  return goog.array.map(this['value'](),
      function (value) {
        return value.toJSON();
      }
  );
};

mugd.editor.ArrayViewModel.prototype.setValue = function (dataArray) {
  var newValue = goog.array.map(dataArray,
      function (data) {
        var model = this._createSubModel();
        model.setValue(data);
        return model;
      }, this
  );
  this['value'](newValue);
};

mugd.editor.ArrayViewModel.isArrayValue = function (schema) {
  return schema.type === mugd.editor.constants.ValueType.ARRAY;
};

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

mugd.editor.ArrayViewModel.prototype.value = function () {
};
mugd.editor.ArrayViewModel.prototype.type = function () {
};
mugd.editor.ArrayViewModel.prototype.description = function () {
};
mugd.editor.ArrayViewModel.prototype.title = function () {
};
