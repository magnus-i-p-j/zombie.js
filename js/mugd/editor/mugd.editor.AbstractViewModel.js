goog.provide('mugd.editor.AbstractViewModel');

goog.require('goog.Disposable');
goog.require('goog.json');
goog.require('mugd.editor.LinkResolver');

goog.require('goog.json');

/**
 * @param {!Object} schema
 * @param {!mugd.editor.LinkResolver} resolver
 * @constructor
 * @implements mugd.editor.IViewModel
 * @extends goog.Disposable
 */
mugd.editor.AbstractViewModel = function (schema, resolver) {
  goog.base(this);
  /**
   * @type {function(string=):string}
   */
  this['title'] = ko.observable(schema['title']);
  /**
   * @type {function(string=):string}
   */
  this['description'] = ko.observable(schema['description']);
  /**
   * @type {string}
   */
  this['type'] = schema['type'];
  /**
   * @type {function(string=):string}
   */
  this['template'] = ko.observable(this['type']);
  /**
   *
   *@type {function(string=):string}
   */
  this['fileName'] = ko.observable();
  /**
   * @type {function(mugd.editor.constants.ModelState=):mugd.editor.constants.ModelState}
   */
  this['modelState'] = ko.observable(mugd.editor.constants.ModelState.UNCHANGED);

  /**
   *
   * @type {!mugd.editor.LinkResolver}
   */
  this.resolver = resolver;

  this.links = null;
};

goog.inherits(mugd.editor.AbstractViewModel, goog.Disposable);

mugd.editor.AbstractViewModel.prototype.disposeInternal = function () {
  if (this.links) {
    goog.array.forEach(this.links, function (link) {
      link.dispose();
    });
  }
  goog.base(this, 'disposeInternal');
};

mugd.editor.AbstractViewModel.prototype['saveModel'] = function () {
  var json = JSON.stringify(this);
  var blob = new Blob([json], {'type': 'data:application/json;charset=utf-8'});
  saveAs(blob, this['fileName']());
};
/**
 * @param {string} path
 * @returns {*}
 */
mugd.editor.AbstractViewModel.prototype.fetch = function (path) {
  var splitPath;
  if (path === '') {
    splitPath = [];
  } else {
    splitPath = path.split('/');
  }
  return this.fetchSplitPath(splitPath);
};


/**
 * @param {!Array} path
 * @param {number=} index
 * @returns {*}
 */
mugd.editor.AbstractViewModel.prototype.fetchSplitPath = function (path, index) {
  throw {'name': 'NotImplementedException', 'message': 'fetchSplitPath'};
};
mugd.editor.AbstractViewModel.prototype['setValue'] = function (value) {
  throw {'name': 'NotImplementedException', 'message': 'setValue'};
};
mugd.editor.AbstractViewModel.prototype['toJSON'] = function () {
  throw {'name': 'NotImplementedException', 'message': 'toJSON'};
};
mugd.editor.AbstractViewModel.prototype['value'] = function () {
  throw {'name': 'NotImplementedException', 'message': 'value'};
};

//Just so the IDE stops whining.
mugd.editor.AbstractViewModel.prototype['title'] = function () {
  throw {'name': 'NotImplementedException', 'message': 'title'};
};
mugd.editor.AbstractViewModel.prototype['description'] = function () {
  throw {'name': 'NotImplementedException', 'message': 'description'};
};
mugd.editor.AbstractViewModel.prototype['type'] = function () {
  throw {'name': 'NotImplementedException', 'message': 'type'};
};
