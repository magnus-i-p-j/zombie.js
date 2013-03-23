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
  /**
   * @type {function(string=):string}
   */
  var properties = {};
  goog.object.forEach(schema['properties'],
      function (value, key, allValues) {
        properties[key] = getSubModel(value);
      }, this
  );
  this['value'] = ko.observable(properties).extend({'objectValue': null});

};

mugd.editor.ObjectViewModel.isObjectValue = function (schema) {
  return schema.type === mugd.editor.constants.ValueType.OBJECT;
};

ko.extenders.objectValue = function (target, option) {
  var result = ko.computed({
    'read': target,
    'write': function (newValue) {
      var current = target();
      goog.object.forEach(newValue,
          function (value, key, allValues) {
            current[key].value(value);
          }
      );
    }
  });
  return result;
};

mugd.editor.ObjectViewModel.prototype._valueWrite = function (newValue) {

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