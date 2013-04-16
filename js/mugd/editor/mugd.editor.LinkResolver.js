goog.provide('mugd.editor.LinkResolver');

goog.require('goog.array');
goog.require('mugd.editor.Link');
goog.require('mugd.editor.Linker');

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
   * @type {Object.<string,!mugd.editor.Uri>}
   */
  this._unresolvedLinks = {};

  /**
   * @type {function(number=):number}
   */
  this.numUnresolved = ko.observable(0);
};

/**
 * @param {string} uri
 * @return {!mugd.editor.Link}
 */
mugd.editor.LinkResolver.prototype.get = function (uri) {
  var link = goog.array.find(this._links, function (item) {
    return item.uri() && uri === item.uri();
  });

  if (!goog.isDefAndNotNull(link)) {
    link = this._unresolvedLinks[uri];
  }

  if (!goog.isDefAndNotNull(link)) {
    link = new mugd.editor.Link(uri);
    this._unresolvedLinks[uri] = link;
    this.numUnresolved(this.numUnresolved() + 1);
  }

  return link;
};

/**
 * @param {!mugd.editor.IViewModel} model
 * @param {!Object} schema
 */
mugd.editor.LinkResolver.prototype.put = function (model, schema) {
  if (schema['links']) {
    var links = schema['links'];
    if (links['rel'] === 'self') {
      var link = new mugd.editor.Link(links['href'], model);
      link.complete.subscribe(function () {
        this._onLinkCompleted(link);
      }, this);
      this._links.push(link);
    }
  }
};

/**
 * @param {!mugd.editor.Link} link
 * @private
 */
mugd.editor.LinkResolver.prototype._onLinkCompleted = function (link) {
  if (link.complete()) {
    if (this._unresolvedLinks[link.uri()]) {
      var unresolved = this._unresolvedLinks[link.uri()];
      unresolved.model(link.model());
      delete this._unresolvedLinks[link.uri()];
      this.numUnresolved(this.numUnresolved() - 1);
    }
  }
};