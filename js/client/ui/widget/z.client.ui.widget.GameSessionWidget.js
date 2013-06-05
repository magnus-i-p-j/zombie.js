goog.provide('z.client.ui.widget.GameSessionWidget');
goog.require('mugd.injector.Injector');
goog.require('z.client');
goog.require('goog.style');

/**
 * @param {!z.client.facet.Gem} gem
 * @param {!z.client.ui.widget.MapWidget} mapWidget
 * @param {!z.client.ui.widget.ContextMenuWidget} contextMenuWidget
 * @constructor
 */
z.client.ui.widget.GameSessionWidget = function (gem, mapWidget, contextMenuWidget, messageLogWidget) {
  this.gem = gem;
  this.mapWidget = mapWidget;
  this.contextMenuWidget = contextMenuWidget;
  this.messageLogWidget = messageLogWidget;
};

z.client.ui.widget.GameSessionWidget.prototype[mugd.injector.Injector.DEPS] = [
  z.client.Resources.GEM,
  z.client.Resources.MAP_WIDGET,
  z.client.Resources.CONTEXT_MENU_WIDGET,
  z.client.Resources.MESSAGE_LOG_WIDGET
];

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

