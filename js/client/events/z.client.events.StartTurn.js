goog.provide('z.client.events.StartTurn');

goog.require('z.client.events');

/**
 * @param {z.client.events.startTurnData} data
 * @extends {goog.events.Event}
 * @constructor
 */
z.client.events.StartTurn = function (data) {
  goog.base(this, z.client.events.EventType.START_TURN);
  this.data = data;
};

goog.inherits(z.client.events.StartTurn, goog.events.Event);

/** @typedef {{
 * tiles: Array.<z.common.entities.Tile>
 * }}
 */
z.client.events.startTurnData;
