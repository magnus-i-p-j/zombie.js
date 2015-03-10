goog.provide('z.client.facet.MessageLogFacet');

goog.require('goog.array');
goog.require('z.client.facet.Facet');
goog.require('z.client');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.client.facet.Facet}
 * @constructor
 */
z.client.facet.MessageLogFacet = function(services) {
  goog.base(this);
  this['template'] = 'message_log';
  /**
   * @type {function(Array.<!z.client.logItem>):Array.<!z.client.logItem>}
   */
  this['messages'] = ko.observableArray();

  /**
   * @type {!z.client.facet.InfoFacet}
   */
  this.info = /** @type {!z.client.facet.InfoFacet} */ services.get(z.client.Resources.INFO_FACET);

  this['any'] = ko.observable({});
};

goog.inherits(z.client.facet.MessageLogFacet, z.client.facet.Facet);

/**
 * @param {goog.events.EventTarget} parent
 */
z.client.facet.MessageLogFacet.prototype.setParentEventTarget = function(parent) {
  goog.base(this, 'setParentEventTarget', parent);
  this.eventHandler.listen(parent, z.client.events.EventType.START_TURN, this.doStartTurn);
  this.eventHandler.listen(parent, z.client.events.EventType.BEFORE_START_TURN, this.doBeforeStartTurn);
};

/**
 * @param  {!z.client.events.StartTurn} e
 */
z.client.facet.MessageLogFacet.prototype.doStartTurn = function(e) {
  this.addMessage('Turn started: ' + e.data.turn, [], {'template': 'start_turn'});
};

/**
 * @param  {!z.client.events.StartTurn} e
 */
z.client.facet.MessageLogFacet.prototype.doBeforeStartTurn = function(e) {
  this['messages'].removeAll();
  this['any']({});
};


/**
 * @param {string} html
 * @param {Array.<!z.client.Tags>} tags
 * @param {z.common.messages.message} message
 */
z.client.facet.MessageLogFacet.prototype.addMessage = function(html, tags, message) {
  var messageItem = {};
  messageItem['turn'] = this.info['turn']();
  messageItem['time'] = new Date();
  messageItem['html'] = html;
  messageItem['message'] = message;

  if (!messageItem['message']['template']) {
    messageItem['message']['template'] = 'chatter';
  }
  messageItem['tags'] = {};
  messageItem['class_tags'] = [];
  goog.array.forEach(tags, function(tag) {
      messageItem['tags'][tag] = true;
      messageItem['class_tags'].push(tag);
      var any = this['any']();
      any[tag] = true;
      this['any'](any);
    }, this
  );
  if (
    !(
    messageItem['tags']['usual'] ||
    messageItem['tags']['important'] ||
    messageItem['tags']['trivial']
    )
  ) {
    messageItem['tags']['usual'] = true;
    messageItem['class_tags'].push('usual');
  }
  this['messages'].push(messageItem);
};

