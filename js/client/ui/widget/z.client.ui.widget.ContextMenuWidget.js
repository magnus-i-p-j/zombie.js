goog.provide('z.client.ui.widget.ContextMenuWidget');

goog.require('mugd.injector.Injector');
goog.require('z.client');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventHandler');
goog.require('goog.Disposable');
goog.require('goog.array');
goog.require('goog.style');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @extends {goog.Disposable}
 * @implements mugd.injector.IInjectable
 */
z.client.ui.widget.ContextMenuWidget = function (services) {
  goog.base(this);
  /**
   * @type {!z.client.facet.ContextMenuFacet}
   * @private
   */
  this._contextMenuFacet = /** @type {!z.client.facet.ContextMenuFacet} */ services.get(z.client.Resources.CONTEXT_MENU_FACET);
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

/**
 * @param {!goog.events.BrowserEvent} e
 */
z.client.ui.widget.ContextMenuWidget.prototype.doMouseOverParent = function (e) {
  if (this._contextMenuFacet.visible() && !this.targetElement.contains(e.target)) {
    this._contextMenuFacet.hide();
  }
};

z.client.ui.widget.ContextMenuWidget.prototype.disposeInternal = function () {
  this.eventHandler.dispose();
};