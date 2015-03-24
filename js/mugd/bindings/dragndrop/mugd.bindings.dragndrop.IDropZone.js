goog.provide('mugd.bindings.dragndrop.IDropZone');

/**
 * @interface
 */
mugd.bindings.dragndrop.IDropZone = function() {
};

/**
 * @param {*} droppable
 * @return {boolean}
 */
mugd.bindings.dragndrop.IDropZone.prototype.canDrop = function(droppable) {
};

/**
 * @param {*} droppable
 */
mugd.bindings.dragndrop.IDropZone.prototype.doDrop = function(droppable) {
};
