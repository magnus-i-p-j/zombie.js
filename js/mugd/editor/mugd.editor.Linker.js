goog.provide('mugd.editor.Linker');

mugd.editor.Linker = function (href) {

  /**
   * @type {function(mugd.editor.IViewModel=):mugd.editor.IViewModel}
   */
  this.model = ko.observable();
  /**
   * @type {function(string=):string}
   */
//  this.uri = ko.observable('game://terrain/grass');
  this.uri = ko.computed(this._parseHref(href));

};

mugd.editor.Linker.prototype._parseHref = function (href) {
  var self = this;
  var innerUri = false;
  var parts = goog.array.map(href.match(/([^{]+)|(\{[^{]+})/g), function (s) {
    if (s[0] === '{') {
      return (function () {
        var field = s.slice(1, -1);
        return function () {
          var model = self.model();
          if (model) {
            var value = model[field]();
            if (value) {
              return value;
            }
          }
          throw 'IncompleteModel';
        }
      })(s);
    }
    return s;
  });
  return function () {
    try {
      var parsedParts = goog.array.map(parts, function (part) {
        if (goog.isFunction(part)) {
          return part();
        } else {
          return part;
        }
      });
      return parsedParts.join('');
    } catch (ex) {
      if (ex === 'IncompleteModel') {
        if (!innerUri) {
          innerUri = mugd.utils.getGuid('random:', '//');
        }
        return innerUri;
      } else {
        throw ex;
      }
    }
  };
};