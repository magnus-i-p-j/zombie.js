goog.provide('z.client.ui.widget.MessageLogWidget');

goog.require('goog.debug.HtmlFormatter');
goog.require('z.client');
goog.require('goog.debug.Logger');
goog.require('mugd.injector.IInjectable');
goog.require('z.client.ui.widget.IWidget');

/**
 * @param {!mugd.injector.ServiceHolder} services
 * @constructor
 * @implements z.client.ui.widget.IWidget
 * @implements mugd.injector.IInjectable
 */
z.client.ui.widget.MessageLogWidget = function (services) {
  /**
   * @type {z.client.facet.MessageLogFacet}
   * @private
   */
  this._messageLogFacet = /** @type {z.client.facet.MessageLogFacet} */ services.get(z.client.Resources.MESSAGE_LOG_FACET);
  /**
   * @type {goog.debug.HtmlFormatter}
   * @private
   */
  this._formatter = new goog.debug.HtmlFormatter();
  this._formatter.showAbsoluteTime = false;

  /**
   * @type {boolean}
   * @private
   */
  this._capturing = true;

  var rootLogger = goog.debug.Logger.getLogger('');
  rootLogger.addHandler(goog.bind(this.addLogRecord, this));
};

z.client.ui.widget.MessageLogWidget.googLogLevelToTag = [
  [z.client.Tags.ERROR, 1000],
  [z.client.Tags.WARNING, 900],
  [z.client.Tags.INFO, 800]
];

/**
 * @param {!Element} targetElement
 */
z.client.ui.widget.MessageLogWidget.prototype.claim = function (targetElement) {
  this.targetElement = targetElement;
};

/**
 * @param {boolean} capturing
 */
z.client.ui.widget.MessageLogWidget.prototype.setCapturing = function (capturing) {
  this._capturing = capturing;
};

/**
 * @param {goog.debug.LogRecord} logRecord
 */
z.client.ui.widget.MessageLogWidget.prototype.addLogRecord = function (logRecord) {
  if (this._capturing) {
    var html = this.getFormatter().formatRecord(logRecord);
    var tags = [z.client.Tags.DEBUG];
    var level = goog.array.find(z.client.ui.widget.MessageLogWidget.googLogLevelToTag, function (level) {
      return level[1] <= logRecord.getLevel().value;
    });
    if (!goog.isNull(level)) {
      tags.push(level[0]);
    }
    this._messageLogFacet.addMessage(html, tags);
  }
};

/**
 * @return {goog.debug.Formatter}
 */
z.client.ui.widget.MessageLogWidget.prototype.getFormatter = function () {
  return this._formatter;
};