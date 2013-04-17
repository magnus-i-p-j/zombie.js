goog.provide('mugd.editor.Link');

/**
 * @param {string} href
 * @constructor
 */
mugd.editor.Link = function(href){
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
  this._parts = goog.array.map(
      tokens,
      function (part) {
        return part[0] === '{' ? this._createValueAccessor(part.slice(1, -1)) : part;
      },
      this
  );

  /**
   * @type {function(string=):string}
   */
  this.uri = ko.computed(this._toUri, this);
};

mugd.editor.Link.prototype._createValueAccessor = function (field) {

  var model = this.model;

  return function () {
    var value;
    console.log(field);
    if (model()) {
      console.log(model().value()[field]);
      value = model().value()[field].value();
    }
    return value;
  };

};

/**
 * @returns {string}
 * @private
 */
mugd.editor.Link.prototype._toUri = function(){
  var uri = [];

  var i = 0;
  var value;
  do{
    value = goog.isFunction(this._parts[i]) ? this._parts[i]() : this._parts[i];
    uri.push(value);
    i += 1;
  }while(i < this._parts.length && goog.isDef(value));

  return goog.isDef(value) ? uri.join('') : this._getGuidUri();
};

/**
 * @returns {string}
 * @private
 */
mugd.editor.Link.prototype._getGuidUri = function(){
  if(!this._guidUri){
    this._guidUri = mugd.utils.getGuid('guid:', '//');
  }
  return this._guidUri;
};
