goog.provide('mugd.bindings.dragndrop');

mugd.bindings.dragndrop.addDragNDrop = function () {

  var translateElement = function (target, x, y) {
    target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  };

  ko.bindingHandlers['dragSource'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
      // This will be called when the binding is first applied to an element
      // Set up any initial state, event handlers, etc. here
      var interactable = interact(element)
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

        var value = valueAccessor();
        var valueUnwrapped = ko.unwrap(value);
        interactable.data = valueUnwrapped;
    }
  };

  var toggleDragTarget = function (isTarget, event) {
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;
    if (isTarget) {
      dropzoneElement.classList.add('drag-target');
      draggableElement.classList.add('can-drop');
    } else {
      dropzoneElement.classList.remove('drag-target');
      draggableElement.classList.remove('can-drop');
    }
  };

  ko.bindingHandlers['dragTarget'] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
      // This will be called when the binding is first applied to an element
      // Set up any initial state, event handlers, etc. here
      var interactable = interact(element)
        .dropzone({
          overlap: 0.75,
          ondragenter: function (event) {
            toggleDragTarget(true, event);
          },
          ondragleave: function (event) {
            toggleDragTarget(false, event);
          },
          ondropdeactivate: function (event) {
            toggleDragTarget(false, event);
          },
          ondrop: function (event) {
            var draggable = event.draggable;
            if(draggable.data) {
              var data = draggable.data;
              //TODO: Call IDropZone drop
            }
          }
        });
      var baseDropChecker = interactable.dropCheck;
      interactable.dropChecker(function (event, target, dragElement, rect) {
        var overlaps = baseDropChecker.call(interactable, event, target, dragElement, rect);
        if (overlaps) {
          //TODO: Call IDropZone canDrop
          console.log("overlap");
        }
        return overlaps;
      });
    }
  };

};