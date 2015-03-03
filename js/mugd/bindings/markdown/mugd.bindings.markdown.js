goog.provide('mugd.bindings.markdown');
/**
 * Copied from http://tech.pro/blog/1863/10-knockout-binding-handlers-i-don-t-want-to-live-without
 * Creates a markdown binding
 */
mugd.bindings.markdown.addMarkdown = function () {
  ko.bindingHandlers['markdown'] = {
    update: function(element, valueAccessor) {
      return ko.bindingHandlers.html.update(element, function() {
        return markdown.toHTML(ko.utils.unwrapObservable(valueAccessor()));
      });
    }
  };
};

