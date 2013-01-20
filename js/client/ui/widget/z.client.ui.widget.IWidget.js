goog.provide('z.client.ui.widget.IWidget');

/**
 * @interface
 */
z.client.ui.widget.IWidget = function(){
};

/**
 * @param {!Element} domElement
 */
z.client.ui.widget.IWidget.prototype.claim = function (domElement) {};