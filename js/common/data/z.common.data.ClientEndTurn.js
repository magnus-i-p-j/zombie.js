goog.provide('z.common.data.ClientEndTurn');

/**
 * @param {!mugd.utils.guid} actorId
 * @param {number} turn
 * @constructor
 */
z.common.data.ClientEndTurn = function (actorId, turn) {
  this.actorId = actorId;
  this.turn = turn;
};

/**
 * @param {!z.common.protocol.clientEndTurn} protocol
 * @return {!z.common.data.ClientEndTurn}
 */
z.common.data.ClientEndTurn.fromProtocol = function (protocol) {
  return new z.common.data.ClientEndTurn(
      protocol['actorId'],
      protocol['turn']
  );
};

z.common.data.ClientEndTurn.prototype.toProtocol = function () {
  return {
    'actorId': this.actorId,
    'turn': this.turn
  };
};