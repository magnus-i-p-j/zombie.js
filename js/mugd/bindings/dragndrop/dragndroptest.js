goog.provide('dragndroptest');
goog.require('mugd.bindings.dragndrop');

dragndroptest.init = function(element) {

  var TestModel = function(initialValues, canDrop) {
    this.canDrop = canDrop;
    this.data = ko.observableArray(initialValues);
  };
  TestModel.prototype.doDrop = function(data) {
    list_2.data.push(data);
  };

  var list_1 = new TestModel(["Donald", "Scrooge", "Woody"], function() {
    return true;
  });
  var list_2 = new TestModel([], function() {
    return true;
  });
  var list_3 = new TestModel([], function(data) {
    return data === 'Woody';
  });

  var model = {
    'list_1': list_1,
    'list_2': list_2,
    'list_3': list_3
  };

  mugd.bindings.dragndrop.addDragNDrop();
  ko.applyBindings(model, element);

};

dragndroptest.init(document.body);