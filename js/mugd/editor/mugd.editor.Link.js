goog.provide('mugd.editor.Link');

goog.require('mugd.utils');

/**
 * @param {string} href
 * @extends goog.Disposable
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
        if (part[0] === '{') {
          return this._createValueAccessor(part.slice(1, -1));
        } else {
          return part;
        }
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
   * @type {function(boolean=):boolean}
   * @private
   */
  this._disposed = ko.observable(false);
  /**
   * @type {function(string=):string}
   */
  this.uri = ko.computed({
    'read': this._toUri,
    'write': this._fromUri
  }, this);

  /**
   * @type {string|null}
   */
  this.previousUri = null;
};

goog.inherits(mugd.editor.Link, goog.Disposable);

mugd.editor.Link.prototype.disposeInternal = function () {
  this._disposed(true);
  goog.base(this, 'disposeInternal');
};

mugd.editor.Link.prototype._createValueAccessor = function (field) {

  var model = this.model;

  var accessor;
  if (field === '@') {
    accessor = function () {
      if (model()) {
        return model()['value']();
      }
    };
  } else {
    accessor = function () {
      var value;
      if (model()) {
        value = model()['value']()[field]['value']();
      }
      return value;
    };
  }
  return accessor;
};

mugd.editor.Link.prototype._createValueSetter = function (field) {

  var model = this.model;
  if (field === '@') {
    return function (newValue) {
      if (model()) {
        model()['value'](newValue);
      }
    };
  }
  return function (newValue) {
    if (model()) {
      model()['value']()[field]['value'](newValue);
    }
  };

};

/**
 * @returns {string}
 * @private
 */
mugd.editor.Link.prototype._toUri = function () {

  if (this._disposed()) {
    return '';
  }

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
  if (newUri === '') {
    this.dispose();
  }
  else {
    var parts = newUri.match(this._UriParse);
    if (goog.isNull(parts)) {
      throw {'name': 'CannotParseUri', 'message': 'Got ' + newUri};
    }
    var i = 1;
    while (parts[i]) {
      this._UriMapping[i - 1](parts[i]);
      i = i + 1;
    }
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
