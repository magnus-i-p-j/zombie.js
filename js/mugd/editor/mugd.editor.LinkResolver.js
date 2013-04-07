goog.provide('mugd.editor.LinkResolver');

goog.require('goog.array');
goog.require('mugd.editor.Link');

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
  var link = goog.array.find(this._selfLinks, function (item) {
    return item.uri() === uri;
  });
  if (goog.isNull(link)) {
    link = new mugd.editor.Link(uri);
    this._selfLinks.push(link);
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
      var uri = ko.computed(
          function () {
            if (model.value() && model.value()['type'].value()) {
              return 'game://terrain/' + model.value()['type'].value();
            }
            return 'test' + math.random();
          }
      );
      var link = this.get(uri());
      link.model(model);
      link.href(true);
    }
  }
};

