goog.provide('z.client.ui.widget.ContextMenuWidget');

goog.require('mugd.Injector');
goog.require('z.client');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventHandler');
goog.require('goog.Disposable');
goog.require('goog.array');
goog.require('goog.style');

/**
 * @param {!z.client.facet.ContextMenuFacet} contextMenuFacet
 * @constructor
 */
z.client.ui.widget.ContextMenuWidget = function(contextMenuFacet){
  goog.base(this);
  this._contextMenuFacet = contextMenuFacet;
  /**
   * @protected
   * @type {goog.events.EventHandler}
   */
  this.eventHandler = new goog.events.EventHandler(this);
};

goog.inherits(z.client.ui.widget.ContextMenuWidget, goog.Disposable);

z.client.ui.widget.ContextMenuWidget.prototype.claim = function (targetElement) {
  this.targetElement = targetElement;
  this.eventHandler.listen(goog.dom.getParentElement(this.targetElement), goog.events.EventType.MOUSEOVER, this.doMouseOverParent);
  this.eventHandler.listen(this.targetElement, goog.events.EventType.CLICK, this.doMouseClicked);
};

z.client.ui.widget.ContextMenuWidget.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.CONTEXT_MENU_FACET
];

/**
 * @param {!goog.events.BrowserEvent } e
 */
z.client.ui.widget.ContextMenuWidget.prototype.doMouseOverParent = function(e){
  if(this._contextMenuFacet.visible() && !this.targetElement.contains(e.target)){
    this._contextMenuFacet.hide();
  }
};

/**
 * @param {!goog.events.BrowserEvent } e
 */
z.client.ui.widget.ContextMenuWidget.prototype.doMouseClicked = function(e){
  console.log('Clicked a: ' + e.target.tagName);
};

z.client.ui.widget.ContextMenuWidget.prototype.disposeInternal = function(){
  this.eventHandler.dispose();
};