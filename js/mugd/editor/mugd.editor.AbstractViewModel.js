goog.provide('mugd.editor.AbstractViewModel');

goog.require('goog.json');
goog.require('mugd.editor.LinkResolver');

/**
 * @param {!Object} schema
 * @param {!mugd.editor.LinkResolver} resolver
 * @constructor
 * @implements mugd.editor.IViewModel
 */
mugd.editor.AbstractViewModel = function (schema, resolver) {
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
   *
   *@type {function(string=):string}
   */
  this['fileName'] = ko.observable();

  /**
   *
   * @type {!mugd.editor.LinkResolver}
   */
  this['resolver'] = resolver;
};

/**
 *
 */
mugd.editor.AbstractViewModel.prototype.saveModel = function () {
  var json = JSON.stringify(this);
  var blob = new Blob([json], {type: 'data:application/json;charset=utf-8'});
  saveAs(blob, this['fileName']());
};

mugd.editor.AbstractViewModel.prototype.setValue = function () {
  throw {'name': 'NotImplementedException', 'methodName': 'setValue'};
};
mugd.editor.AbstractViewModel.prototype.toJSON = function () {
  throw {'name': 'NotImplementedException', 'methodName': 'toJSON'};
};
mugd.editor.AbstractViewModel.prototype.value = function () {
  throw {'name': 'NotImplementedException', 'methodName': 'value'};
};

//Just so the IDE stops whining.
mugd.editor.AbstractViewModel.prototype.title = function () {
  throw {'name': 'NotImplementedException', 'methodName': 'title'};
};
mugd.editor.AbstractViewModel.prototype.description = function () {
  throw {'name': 'NotImplementedException', 'methodName': 'description'};
};
mugd.editor.AbstractViewModel.prototype.type = function () {
  throw {'name': 'NotImplementedException', 'methodName': 'type'};
};
