goog.provide('mugd.editor.Link');

/**
 * @param {string} href
 * @param {mugd.editor.IViewModel=} model
 * @constructor
 */
mugd.editor.Link = function(href, model){
  this.href = href;
  /**
   * @type {function(mugd.editor.IViewModel=):mugd.editor.IViewModel}
   */
  this.model = ko.observable(model);

  /**
   * @type {*}
   * @private
   */
  this._parts = ko.observableArray();

  /**
   * @type {function(string=):string}
   */
  this.uri = ko.computed(function(){
    if(!(this.model() && this.model().value())){
      return this.href;
    }
    else{
      this._parseHref(this.href, this.model().value());
      return this._toUri();
    }
  }, this);

  /**
   * @type {function(boolean=):boolean}
   */
  this.complete = ko.computed(this._isComplete, this);

};

/**
 * @param {string} href
 * @param {*} value
 * @private
 */
mugd.editor.Link.prototype._parseHref = function(href, value){
  var regex = /({[\w]*})/;
  var parts = href.split(regex);

  for(var i = 0; i < parts.length; ++i){
    if(parts[i].match(regex)){
      var prop = value[parts[i].slice(1,-1)];
      if(prop){
        parts[i] = prop.value;
      }
    }
  }

  this._parts(parts);
  this._parts.valueHasMutated();
};

/**
 * @returns {string}
 * @private
 */
mugd.editor.Link.prototype._toUri = function(){
  var uri = [];
  for(var i = 0; i < this._parts().length; ++i){
    if(ko.isObservable(this._parts()[i])){
      uri.push(this._parts()[i]());
    }
    else{
      uri.push(this._parts()[i]);
    }
  }
  return uri.join('');
};

/**
 * @returns {boolean}
 * @private
 */
mugd.editor.Link.prototype._isComplete = function(){
  var complete = false;
  if(this._parts()[0]){
    complete = true;
    for(var i = 0; i < this._parts().length; ++i){
      if(complete && ko.isObservable(this._parts()[i])){
        complete = !!this._parts()[i]();
      }
    }
  }
  return complete;
};
