goog.provide('mugd.editor.ObjectViewModel');

goog.require('goog.object');
goog.require('mugd.editor.constants');

/**
 * @implements mugd.editor.IViewModel
 * @constructor
 */
mugd.editor.ObjectViewModel = function (schema, getSubModel) {
  /**
   * @type {function(string=):string}
   */
  this['title'] = ko.observable(schema['title']);
  /**
   * @type {function(string=):string}
   */
  this['description'] = ko.observable(schema['description']);

  this['properties'] = ko.observableArray();

  var properties = {};
  goog.object.forEach(schema['properties'],
      function (value, key, allValues) {
        properties[key] = getSubModel(value);
        this['properties'].push(properties[key]);
      }, this
  );
  this['value'] = ko.observable(properties);
};

mugd.editor.ObjectViewModel.prototype.setValue = function (newValue) {
  var current = this.value();
  goog.object.forEach(newValue,
      function (value, key) {
        current[key].setValue(value);
      }
  );
};

mugd.editor.ObjectViewModel.isObjectValue = function (schema) {
  return schema.type === mugd.editor.constants.ValueType.OBJECT;
};

mugd.editor.ObjectViewModel.prototype.value = function (value) {
};
mugd.editor.ObjectViewModel.prototype.title = function () {
};
mugd.editor.ObjectViewModel.prototype.type = function (value) {
  return mugd.editor.constants.ValueType.OBJECT;
};
mugd.editor.ObjectViewModel.prototype.description = function () {
};