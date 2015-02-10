goog.provide('z.common.messages.MessageBuilder');

goog.require('goog.array');
goog.require('z.common.messages');

/**
 * @param {mugd.entities.entity} cause
 * @constructor
 */
z.common.messages.MessageBuilder = function(cause) {
  this.cause = cause;
  this.args = [];
};

z.common.messages.MessageBuilder.prototype.addStockpileMessage = function(owner, type, amount) {
  this.args.push({
    owner: owner.guid,
    type: type,
    amount: amount
  });
};

z.common.messages.MessageBuilder.prototype.addTerrainMessage = function(tile, terrain) {
  this.args.push({
    pos: tile.position,
    terrain: terrain
  });
};

z.common.messages.MessageBuilder.prototype.addCullZombieMessage = function(tile, culled) {
  this.args.push({
    pos: tile.position,
    culled: culled
  });
};

z.common.messages.MessageBuilder.prototype.addProjectEndedMessage = function(project) {
  this.args.push('Project ended ' + project.name);
};

z.common.messages.MessageBuilder.prototype.addGameOverMessage = function(actor, won) {
  if (won) {
    this.args.push('You won');
  } else {
    this.args.push('You lost');
  }
};

z.common.messages.MessageBuilder.prototype.addMessage = function(actor, message) {
  this.args.push(message);
};

/**
 * @param {z.common.messages.level} level
 */
z.common.messages.MessageBuilder.prototype.setLevel = function(level) {
  this.args.push(level);
};

z.common.messages.MessageBuilder.prototype.build = function() {
  return JSON.stringify(this.args, null, 2);
};