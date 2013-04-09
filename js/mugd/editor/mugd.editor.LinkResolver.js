goog.provide('mugd.editor.LinkResolver');

goog.require('goog.array');
goog.require('mugd.editor.Link');

/**
 * @constructor
 */
mugd.editor.LinkResolver = function () {
  this.links = [];
  this.unresolvedLinks = {};
};

/**
 * @param {string} uri
 * @return {*}
 */
mugd.editor.LinkResolver.prototype.get = function (uri) {
  var link = goog.array.find(this.links, function (item) {
    return item.isComplete() && uri === item.toUri();
  });

  if(goog.isNull(link)){
    link = new mugd.editor.Link(uri);
    this.unresolvedLinks[uri] = link;
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
      link.complete.subscribe(function(){
        this.onLinkCompleted(link);
      }, this);
      this.links.push(link);
      //console.log('Links =' + this.links);
    }
  }
};

mugd.editor.LinkResolver.prototype.onLinkCompleted = function(link){
  //This is the link that caused the event to be triggered.
  if(link.isComplete()){
    if(this.unresolvedLinks[link.toUri()]){ //TODO: manage many unresolved links to the same object!!!
      var unresolved = this.unresolvedLinks[link.toUri()];
      unresolved.model(link.model());
      delete this.unresolvedLinks[link.toUri()];
    }
  }
};