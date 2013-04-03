goog.provide('mugd.editor.LinkResolver');

goog.require('goog.array');

/**
 * @constructor
 */
mugd.editor.LinkResolver = function () {
  this._selfLinks = [];
};

/**
 * @param {string} uri
 * @return {*}
 */
mugd.editor.LinkResolver.prototype.get = function (uri) {
  var pair = goog.array.find(this._selfLinks, function(item){
    return item.uri() === uri;
  });
  return pair.model;
};

/**
 * @param {!mugd.editor.IViewModel} model
 * @param {!Object} schema
 */
mugd.editor.LinkResolver.prototype.put = function (model, schema) {
  if(schema['links']){
    var links = schema['links'];
    if(links['rel'] === 'self'){
      var uri = ko.computed(
          function(){
            if(model.value() && model.value()['type'].value()){
              return 'game://terrain/' + model.value()['type'].value();
            }
            return '';
          }
      );
      this._selfLinks.push({uri:uri, model:model});
    }
  }
};

