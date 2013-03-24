goog.provide('mugd.editor.ArrayViewModel');

/**
 * @implements mugd.editor.IViewModel
 * @constructor
 */
mugd.editor.ArrayViewModel = function (schema, createSubModel) {
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
