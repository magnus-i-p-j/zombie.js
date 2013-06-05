goog.provide('z.client.ui.widget.ContextMenuWidget');

goog.require('mugd.injector.Injector');
goog.require('z.client');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventHandler');
goog.require('goog.Disposable');
goog.require('goog.array');
goog.require('goog.style');

/**
 * @param {!z.client.facet.ContextMenuFacet} contextMenuFacet
 * @constructor
 * @extends {goog.Disposable}
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
};

z.client.ui.widget.ContextMenuWidget.prototype[mugd.injector.Injector.DEPS] = [
  z.client.Resources.CONTEXT_MENU_FACET
];

/**
 * @param {!goog.events.BrowserEvent} e
 */
z.client.ui.widget.ContextMenuWidget.prototype.doMouseOverParent = function(e){
  if(this._contextMenuFacet.visible() && !this.targetElement.contains(e.target)){
    this._contextMenuFacet.hide();
  }
};

z.client.ui.widget.ContextMenuWidget.prototype.disposeInternal = function(){
  this.eventHandler.dispose();
};