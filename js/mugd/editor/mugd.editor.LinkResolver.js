goog.provide('mugd.editor.LinkResolver');

goog.require('goog.array');
goog.require('goog.object');
goog.require('mugd.editor.Link');

/**
 * @constructor
 */
mugd.editor.LinkResolver = function () {

  /**
   * @private
   * @type {Array.<!mugd.editor.Link>}
   */
  this._links = [];

  /**
   * @private
   * @type {Object.<string,Array.<function(!mugd.editor.IViewModel)>>}
   */
  this._unresolvedLinks = {};

  this._selects = {};

  /**
   * @type {function(number=):number}
   */
  this.numUnresolved = ko.observable(0);
};

/**
 * @param {string} uri
 * @param {function(!mugd.editor.IViewModel)} callback
 */
mugd.editor.LinkResolver.prototype.get = function (uri, callback) {

  var link = goog.array.find(this._links, function (item) {
    return uri === item.uri();
  });

  if (goog.isDefAndNotNull(link)) {
    var model = link.model();
  }
  if (goog.isDefAndNotNull(model)) {
    callback(model);
  } else {
    if (!this._unresolvedLinks[uri]) {
      this._unresolvedLinks[uri] = [];
    }
    this.numUnresolved(this.numUnresolved() + 1);
    this._unresolvedLinks[uri].push(callback);
  }

};

/**
 * @param {!Object} schema
 * @returns {string}
 */
mugd.editor.LinkResolver.prototype._getSelectId = function (schema) {
  return schema['links']['href'];
};

/**
 * @param {!Object} schema
 * @returns {function(string):boolean}
 */
mugd.editor.LinkResolver.prototype._getTestFunction = function (schema) {
  var href = schema['links']['href'];
  var regex = new RegExp(href.replace("{@}", "(.*[^/])"));
  return function (uri) {
    return uri ? regex.test(uri) : false;
  };
};

mugd.editor.LinkResolver.prototype.select = function (schema) {
  if (schema['links']['rel'] === 'full') {
    var id = this._getSelectId(schema);
    if (!this._selects[id]) {
      var result = ko.observableArray();
      var test = this._getTestFunction(schema);
      goog.array.forEach(this._links, function (link) {
        if (test(link.uri())) {
          result.push(link.model());
        }
      }, this);
      this._selects[id] = {
        test: test,
        result: result
      };
    }

    return this._selects[id].result;
  }
};

/**
 * @param {!mugd.editor.IViewModel} model
 * @param {!Object} schema
 */
mugd.editor.LinkResolver.prototype.put = function (model, schema) {
  if (schema['links']) {
    var links = schema['links'];
    if (links['rel'] === 'self') {
      var link = new mugd.editor.Link(links['href']);
      link.model(model);
      link.uri.subscribe(function (uri) {
        this._onUriChanged(link, uri);
      }, this);
      if (!model.links) {
        model.links = [];
      }
      model.links.push(link);
      this._links.push(link);
    }
  }
};

mugd.editor.LinkResolver.prototype._updateUnresolvedLinks = function (uri, link) {
  if (this._unresolvedLinks[uri]) {
    var unresolved = this._unresolvedLinks[uri];
    goog.array.forEach(unresolved, function (callback) {
      callback(link.model());
    });
    delete this._unresolvedLinks[uri];
    this.numUnresolved(this.numUnresolved() - 1);
  }
};

/**
 * @param {mugd.editor.Link} link
 * @param {string|null} previousUri
 * @param {string} uri
 * @private
 */
mugd.editor.LinkResolver.prototype._updateSelects = function (link, previousUri, uri) {
  goog.object.forEach(this._selects, function (select) {
    if (select.test(previousUri) && !select.test(uri)) {
      select.result.remove(link.model());
    } else if (!select.test(previousUri) && select.test(uri)) {
      select.result.push(link.model());
    }
  });
};

/**
 * @param {!mugd.editor.Link} link
 * @param {string} uri
 * @private
 */
mugd.editor.LinkResolver.prototype._onUriChanged = function (link, uri) {
  this._updateUnresolvedLinks(uri, link);
  this._updateSelects(link, link.previousUri, uri);
  link.previousUri = uri;
};