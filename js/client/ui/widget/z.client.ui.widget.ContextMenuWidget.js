goog.provide('z.client.ui.widget.ContextMenuWidget');

goog.require('mugd.Injector');
goog.require('z.client');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventHandler');
goog.require('goog.Disposable');

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
  this.eventHandler.listen(targetElement, goog.events.EventType.MOUSEOUT, this.doMouseOut);
}

z.client.ui.widget.ContextMenuWidget.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.CONTEXT_MENU_FACET
];

z.client.ui.widget.ContextMenuWidget.prototype.doMouseOver = function(){
  this.eventHandler.listenOnce(this.targetElement, goog.events.EventType.MOUSEOUT, this.doMouseOut);
};

/**
 * @param {!goog.events.BrowserEvent } e
 */
z.client.ui.widget.ContextMenuWidget.prototype.doMouseOut = function(e){
  //TODO: Why can't I get a mouseout from the context_menu div instead?
  if(e.target.id === 'context_menu_widget'){
    this._contextMenuFacet.hide();
  }
};

z.client.ui.widget.ContextMenuWidget.prototype.disposeInternal = function(){
  this.eventHandler.dispose();
};