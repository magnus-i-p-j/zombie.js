goog.provide('z.client.facet.MessageLogFacet');

goog.require('goog.array');
goog.require('z.client.facet.Facet');

/**
 * @extends {z.client.facet.Facet}
 * @constructor
 *
 * @param  {z.client.facet.InfoFacet} infoFacet
 */
z.client.facet.MessageLogFacet = function (infoFacet) {
  goog.base(this);

  /**
   * @type {function(Array.<!z.client.logItem>):Array.<!z.client.logItem>}
   */
  this['messages'] = ko.observableArray();

  /**
   * @type {z.client.facet.InfoFacet}
   */
  this.info = infoFacet;
};

goog.inherits(z.client.facet.MessageLogFacet, z.client.facet.Facet);

z.client.facet.MessageLogFacet.prototype[mugd.injector.Injector.DEPS] = [
  z.client.Resources.INFO_FACET
];

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
 * @param {Array.<!z.client.Tags>} tags
 */
z.client.facet.MessageLogFacet.prototype.addMessage = function (html, tags) {
  var messageItem = {};
  messageItem['turn'] = this.info.turn();
  messageItem['time'] = new Date();
  messageItem['html'] = html;
  messageItem['tags'] = {};
  goog.array.forEach(tags, function (tag) {
        messageItem['tags'][tag] = true;
      }
  );
  this['messages'].push(messageItem);
};

