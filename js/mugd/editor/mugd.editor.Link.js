goog.provide('mugd.editor.Link');

mugd.editor.Link = function(href, model){
  this.href = href;
  this.model = ko.observable(model);
  this._parts = ko.observableArray();
  this.uri = ko.computed(function(){
    if(!(this.model() && this.model().value())){
      return this.href;
    }
    else{
      //console.log('Value = ' + JSON.stringify(this.model().value()));
      //if(!this._parts()[0]){ //TODO: Throttle when to parse the href?
        this.parseHref(this.href, this.model().value());
      //}
      return this.toUri();
    }
  }, this);
  this.complete = ko.computed(this.isComplete, this);
};

mugd.editor.Link.prototype.parseHref = function(href, value){
  var regex = /({.*?})/;
  var parts = href.split(regex);

  for(var i = 0; i < parts.length; ++i){
    if(parts[i].match(regex)){
      var prop = value[parts[i].slice(1,-1)];
      if(prop){
        parts[i] = prop.value;
      }
    }
  }
  //console.log('Parts = ' + parts + '; uri = ' + this.toUri());

  this._parts(parts);
  this._parts.valueHasMutated();
};

mugd.editor.Link.prototype.toUri = function(){
  var uri = [];
  for(var i = 0; i < this._parts().length; ++i){
    if( typeof(this._parts()[i]) === 'function'){
      uri.push(this._parts()[i]());
    }
    else{
      uri.push(this._parts()[i]);
    }
  }
  return uri.join('');
};

mugd.editor.Link.prototype.isComplete = function(){
  var complete = false;
  if(this._parts()[0]){
    complete = true;
    for(var i = 0; i < this._parts().length; ++i){
      if(complete && typeof(this._parts()[i]) === 'function'){
        complete = !!this._parts()[i]();
      }
    }
  }
  return complete;
};
