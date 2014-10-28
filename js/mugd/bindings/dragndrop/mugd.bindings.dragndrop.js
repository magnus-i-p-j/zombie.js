goog.provide('mugd.bindings.dragndrop');

mugd.bindings.dragndrop.addDragNDrop = function() {

  ko.bindingHandlers['uniqueFor'] = {
    'init': function(element, valueAccessor) {
      var after = counter + (ko.utils.unwrapObservable(valueAccessor()) === 'after' ? 0 : 1);
      element.setAttribute('for', prefix + after);
    }
  };

};