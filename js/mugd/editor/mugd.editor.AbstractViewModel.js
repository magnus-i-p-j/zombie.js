goog.provide('mugd.editor.AbstractViewModel');

/**
 * @constructor
 */
mugd.editor.AbstractViewModel = function (schema) {
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
};
