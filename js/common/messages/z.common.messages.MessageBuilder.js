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
  this.args.push(goog.array.clone(arguments));
};

z.common.messages.MessageBuilder.prototype.addTerrainMessage = function(tile, terrain) {
  this.args.push(goog.array.clone(arguments));
};

z.common.messages.MessageBuilder.prototype.addCullZombieMessage = function(tile, culled) {
  this.args.push(goog.array.clone(arguments));
};

z.common.messages.MessageBuilder.prototype.addProjectEndedMessage = function(project) {
  this.args.push(goog.array.clone(arguments));
};

z.common.messages.MessageBuilder.prototype.addGameOverMessage = function(actor, won) {
  this.args.push(goog.array.clone(arguments));
};

z.common.messages.MessageBuilder.prototype.addMessage = function(actor, message) {
  this.args.push(goog.array.clone(arguments));
};

/**
 * @param {z.common.messages.level} level
 */
z.common.messages.MessageBuilder.prototype.setLevel = function(level) {
  this.args.push(goog.array.clone(arguments));
};

z.common.messages.MessageBuilder.prototype.build = function() {
  return this.args;
};