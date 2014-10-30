goog.provide('mugd.bindings.dragndrop');

mugd.bindings.dragndrop.addDragNDrop = function() {

  var translateElement = function(target, x, y) {
    target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  };
  var toggleDragTarget = function(isTarget, event) {
    var draggableElement = event.relatedTarget;
    var dropzoneElement = event.target;
    if (isTarget) {
      dropzoneElement.classList.add('mugd-drag-target');
      draggableElement.classList.add('mugd-can-drop');
    } else {
      dropzoneElement.classList.remove('mugd-drag-target');
      draggableElement.classList.remove('mugd-can-drop');
    }
  };

  ko.bindingHandlers['dragSource'] = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
      var interactable = interact(element)
        .draggable({
          /**
           * @param {{
             *  dx: number,
             *  dy: number,
             *  target: *
             * }} event
           */
          onstart: function(event) {
            element.classList.add('mugd-dragged');
          },
          /**
           * @param {{
             *  dx: number,
             *  dy: number,
             *  target: *
             * }} event
           */
          onmove: function(event) {
            var target = event.target
            var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
            translateElement(target, x, y);
          },
          /**
           * @param {{
             *  dx: number,
             *  dy: number,
             *  target: *
             * }} event
           */
          onend: function(event) {
            translateElement(event.target, 0, 0);
            element.classList.remove('mugd-dragged');
          }
        })
        .inertia(true);

      var value = valueAccessor();
      var valueUnwrapped = ko.unwrap(value);
      interactable.data = valueUnwrapped;

      ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
        interactable.data = null;
      });
    }
  };

  ko.bindingHandlers['dragTarget'] = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
      var value = valueAccessor();
      /**
       * @type {mugd.bindings.dragndrop.IDropZone}
       */
      var target = ko.unwrap(value);

      if (!(target.canDrop && target.doDrop)) {
        console.log(target);
        throw 'target must implement mugd.bindings.dragndrop.IDropZone';
      }

      var interactable = interact(element)
        .dropzone({
          overlap: 0.75,
          ondragenter: function(event) {
            toggleDragTarget(true, event);
          },
          ondragleave: function(event) {
            toggleDragTarget(false, event);
          },
          ondropdeactivate: function(event) {
            toggleDragTarget(false, event);
          },
          ondrop: function(event) {
            var draggable = event.draggable;
            if (draggable.data && target.canDrop(draggable.data)) {
              target.doDrop(draggable.data);
            }
          }
        });
      var baseDropChecker = interactable.dropCheck;
      interactable.dropChecker(function(event, interactableTarget, dragElement, rect) {
        var overlaps = baseDropChecker.call(interactable, event, interactableTarget, dragElement, rect);
        return overlaps && target.canDrop(interactableTarget.data);
      });
    }
  };

};