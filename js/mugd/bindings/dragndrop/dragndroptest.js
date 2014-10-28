goog.provide('dragndroptest');
goog.require('mugd.bindings.dragndrop');

dragndroptest.init = function(element) {

  var model = {
    'list_1': ko.observableArray(["Donald", "Scrooge", "Woody"]),
    'list_2': ko.observableArray([])
  };
  mugd.bindings.dragndrop.addDragNDrop();
  ko.applyBindings(model, element);

  // TODO: drop/drag

};

dragndroptest.init(document.body);