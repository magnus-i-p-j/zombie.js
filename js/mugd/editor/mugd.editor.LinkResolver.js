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
   * @type {Object.<string,Array.<function(!mugd.editor.IViewModel)>}
   */
  this._unresolvedLinks = {};

  this._fullLinks = {};

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
    callback(link.model());
  }
  else{
    if(!this._unresolvedLinks[uri]){
      this._unresolvedLinks[uri] = [];
    }
    this.numUnresolved(this.numUnresolved() + 1);
    this._unresolvedLinks[uri].push(callback);
  }

};

mugd.editor.LinkResolver.prototype.select = function (schema, options) {
  if (schema['links']) {
    var links = schema['links'];
    if (links['rel'] === 'full') {
      var href = links['href'];
      var regex = new RegExp(href.replace("{@}","(.*[^/])"));
      if(!this._fullLinks[regex]){
        this._fullLinks[regex] = [];
      }

      goog.array.forEach(this._links, function(link){
        if(regex.test(link.uri())){
          options.push(link.model());
        }
      });

      this._fullLinks[regex].push(options);
    }
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
      this._links.push(link);
    }
  }
};

/**
 * @param {!mugd.editor.Link} link
 * @param {string} uri
 * @private
 */
mugd.editor.LinkResolver.prototype._onUriChanged = function (link, uri) {

  if (this._unresolvedLinks[uri]) {
    var unresolved = this._unresolvedLinks[uri];
    goog.array.forEach(unresolved, function(callback){
      callback(link.model());
    });
    delete this._unresolvedLinks[uri];
    this.numUnresolved(this.numUnresolved() - 1);
  }
  /*
  goog.object.forEach(this._fullLinks, function(regex, regex){
    if(regex.test(uri)){
      console.log(i);
    }
  });
  */
};