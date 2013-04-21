goog.provide('mugd.editor.Link');

/**
 * @param {string} href
 * @constructor
 */
mugd.editor.Link = function (href) {
  this.href = href;

  /**
   * @type {function(mugd.editor.IViewModel=):mugd.editor.IViewModel}
   */
  this.model = ko.observable();

  var tokens = href.match(/([^{]+)|(\{[^{]+})/g);
  /**
   * @type {*}
   * @private
   */
  this._partsToUri = goog.array.map(
      tokens,
      function (part) {
        return part[0] === '{' ? this._createValueAccessor(part.slice(1, -1)) : part;
      },
      this
  );

  this._UriMapping = [];
  this._UriParse = new RegExp('^' + (goog.array.map(
      tokens,
      function (part) {
        if (part[0] === '{') {
          this._UriMapping.push(this._createValueSetter(part.slice(1, -1)));
          return '(.+)';
        } else {
          return this._escapeRegExp(part);
        }
      },
      this
  )).join('') + '$');

  /**
   * @type {function(string=):string}
   */
  this.uri = ko.computed({
    'read': this._toUri,
    'write': this._fromUri
  }, this);
};

mugd.editor.Link.prototype._createValueAccessor = function (field) {

  var model = this.model;

  return function () {
    var value;
    if (model()) {
      value = model().value()[field].value();
    }
    return value;
  };

};

mugd.editor.Link.prototype._createValueSetter = function (field) {

  var model = this.model;

  return function (newValue) {
    if (model()) {
      model().value()[field].value(newValue);
    }
  };

};

/**
 * @returns {string}
 * @private
 */
mugd.editor.Link.prototype._toUri = function () {
  var uri = [];

  var i = 0;
  var value;
  do {
    value = goog.isFunction(this._partsToUri[i]) ? this._partsToUri[i]() : this._partsToUri[i];
    uri.push(value);
    i += 1;
  } while (i < this._partsToUri.length && goog.isDef(value));

  return goog.isDef(value) ? uri.join('') : this._getGuidUri();
};

/**
 * @param {string} newUri
 * @private
 */
mugd.editor.Link.prototype._fromUri = function (newUri) {
  var parts = newUri.match(this._UriParse);
  if (goog.isNull(parts)) {
    throw {'name': 'CannotParseUri', 'message': 'Got ' + newUri};
  }
  var i = 1;
  while (parts[i]) {
    this._UriMapping[i - 1](parts[i]);
    i = i + 1;
  }

};
/**
 * @returns {string}
 * @private
 */
mugd.editor.Link.prototype._getGuidUri = function () {
  if (!this._guidUri) {
    this._guidUri = mugd.utils.getGuid('guid:', '//');
  }
  return this._guidUri;
};

mugd.editor.Link.prototype._escapeRegExp = function (str) {
  return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};