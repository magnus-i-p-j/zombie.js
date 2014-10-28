goog.provide('mugd.bindings.dragndrop');

mugd.bindings.dragndrop.addDragNDrop = function() {

  var translateElement = function(target, x, y) {
    target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  };

  ko.bindingHandlers['dragSource'] = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
      // This will be called when the binding is first applied to an element
      // Set up any initial state, event handlers, etc. here
      interact(element)
        .draggable({
            /**
             * @param {{
             *  dx: number,
             *  dy: number,
             *  target: *
             * }} event
             */
            onmove: function (event) {
              var target = event.target,
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

              translateElement(target, x, y);
            },
            /**
             * @param {{
             *  dx: number,
             *  dy: number,
             *  target: *
             * }} event
             */
            onend: function (event) {
              var target = event.target;
              translateElement(target, 0, 0);
            }
          })
          .inertia(true);
    }
  };

  ko.bindingHandlers['dragTarget'] = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
      // This will be called when the binding is first applied to an element
      // Set up any initial state, event handlers, etc. here
      var interactable = interact(element).dropzone({
        overlap: 0.75
      });
      var baseDropChecker = interactable.dropCheck;
      interactable.dropChecker(
        function(event){
          //console.log(event);
          //console.log(baseDropChecker);
          if(baseDropChecker.call(interactable, event)) {
            console.log("dropChecker");
          }
        });
    }
  };

};