goog.provide('mugd.editor.PrimitiveViewModel');

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
