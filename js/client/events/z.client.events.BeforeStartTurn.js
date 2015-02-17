goog.provide('z.client.events.BeforeStartTurn');

goog.require('z.client.events.StartTurn');

/**
 * @param {z.client.events.startTurnData} data
 * @extends {goog.events.Event}
 * @constructor
 */
z.client.events.BeforeStartTurn = function (data) {
  goog.base(this, z.client.events.EventType.BEFORE_START_TURN);
  this.data = data;
};

goog.inherits(z.client.events.BeforeStartTurn, goog.events.Event);

