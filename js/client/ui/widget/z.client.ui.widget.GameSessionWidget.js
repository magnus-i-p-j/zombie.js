goog.provide('z.client.ui.widget.GameSessionWidget');
goog.require('mugd.injector.Injector');
goog.require('z.client');
goog.require('goog.style');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.client.ui.widget.GameSessionWidget = function (services) {
  /**
   * @type {!z.client.facet.Gem}
   */
  this.gem = /** @type {!z.client.facet.Gem} */ services.get(z.client.Resources.GEM);
  /**
   * @type {!z.client.ui.widget.MapWidget}
   */
  this.mapWidget = /** @type {!z.client.ui.widget.MapWidget} */ services.get(z.client.Resources.MAP_WIDGET);
  /**
   * @type {!z.client.ui.widget.ContextMenuWidget}
   */
  this.contextMenuWidget = /** @type {!z.client.ui.widget.ContextMenuWidget} */ services.get(z.client.Resources.CONTEXT_MENU_WIDGET);
  ///**
  // * @type {!z.client.ui.widget.MessageLogWidget}
  // */
  //this.messageLogWidget = /** @type {!z.client.ui.widget.MessageLogWidget} */ services.get(z.client.Resources.MESSAGE_LOG_WIDGET);
};

/**
 * @param {!Element} gameDomElement
 */
z.client.ui.widget.GameSessionWidget.prototype.claim = function (gameDomElement) {
  this.initKo();
  ko.applyBindings(this.gem, gameDomElement);
  this.mapWidget.claim(goog.dom.getElement('map'));
  this.contextMenuWidget.claim(goog.dom.getElement('context_menu'));
};

z.client.ui.widget.GameSessionWidget.prototype.initKo = function () {
  var zeroFill2 = function (hours2) {
    var hours = hours2 + '';
    if (hours.length === 1) {
      hours = '0' + hours;
    }
    return hours;
  };
  ko.bindingHandlers['time'] = {
    'update':function (element, valueAccessor, allBindingsAccessor, viewModel) {
      /**
       * @type {!Date}
       */
      var date = ko.utils.unwrapObservable(valueAccessor());
      var hours = zeroFill2(date.getHours());
      var minutes = zeroFill2(date.getMinutes());
      var seconds = zeroFill2(date.getSeconds());
      var html = hours + ':' + minutes + ':' + seconds;
      element.innerHTML = html;
    }
  };
  ko.bindingHandlers['scrollIntoView'] = {
    'update':function (element, valueAccessor, allBindingsAccessor) {
      setTimeout(function () {
        goog.style.scrollIntoContainerView(element, element.parentElement);
      }, 0);
    }
  };
};

