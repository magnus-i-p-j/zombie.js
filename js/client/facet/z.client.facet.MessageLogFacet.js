goog.provide('z.client.facet.MessageLogFacet');

goog.require('goog.array');
goog.require('z.client.facet.Facet');
goog.require('z.client');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.client.facet.Facet}
 * @constructor
 */
z.client.facet.MessageLogFacet = function (services) {
  goog.base(this);

  /**
   * @type {function(Array.<!z.client.logItem>):Array.<!z.client.logItem>}
   */
  this['messages'] = ko.observableArray();

  /**
   * @type {!z.client.facet.InfoFacet}
   */
  this.info = /** @type {!z.client.facet.InfoFacet} */ services.get(z.client.Resources.INFO_FACET);
};

goog.inherits(z.client.facet.MessageLogFacet, z.client.facet.Facet);

/**
 * @param {goog.events.EventTarget} parent
 */
z.client.facet.MessageLogFacet.prototype.setParentEventTarget = function (parent) {
  goog.base(this, 'setParentEventTarget', parent);
  this.eventHandler.listen(parent, z.client.events.EventType.START_TURN, this.doStartTurn);
};

/**
 * @param  {!z.client.events.StartTurn} e
 */
z.client.facet.MessageLogFacet.prototype.doStartTurn = function (e) {
  this.addMessage('Turn started: ' + e.data.turn, []);
};

/**
 * @param {string} html
 * @param {z.common.messages.message} message
 * @param {Array.<!z.client.Tags>} tags
 */
z.client.facet.MessageLogFacet.prototype.addMessage = function (html, tags, message) {
  var messageItem = {};
  messageItem['turn'] = this.info['turn']();
  messageItem['time'] = new Date();
  messageItem['html'] = html;
  messageItem['message'] = message;
  messageItem['tags'] = {};
  goog.array.forEach(tags, function (tag) {
        messageItem['tags'][tag] = true;
      }
  );
  this['messages'].push(messageItem);
};

