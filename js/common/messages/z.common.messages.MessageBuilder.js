goog.provide('z.common.messages.MessageBuilder');

goog.require('goog.array');
goog.require('goog.object');
goog.require('z.common.messages');

/**
 * @param {mugd.entities.entity} cause
 * @constructor
 */
z.common.messages.MessageBuilder = function(cause) {
  this.cause = cause;
  this.args = [];
  this.stockpile = {};
  this.terrain = null;
  this.culled = null;
  this.text = null;
  this.level = z.common.messages.level.USUAL;
  this.points = 0;
  this._empty = true;
};

z.common.messages.MessageBuilder.prototype.addStockpileMessage = function(owner, type, amount) {
  if (this.stockpile[type]) {
    this.stockpile[type] = this.stockpile[type] + amount;
  } else {
    this.stockpile[type] = amount;
  }
  this._empty = false;
};

z.common.messages.MessageBuilder.prototype.addTerrainMessage = function(tile, terrain) {
  this.terrain = terrain;
  this._empty = false;
};

z.common.messages.MessageBuilder.prototype.addCullZombieMessage = function(tile, culled) {
  this.culled = culled;
  this._empty = false;
};

z.common.messages.MessageBuilder.prototype.addProjectEndedMessage = function(project) {
  // pass
};

z.common.messages.MessageBuilder.prototype.addGameOverMessage = function(actor, won) {
  // pass
};

z.common.messages.MessageBuilder.prototype.addMessage = function(actor, message) {
  this.text = message;
  this._empty = false;
};

z.common.messages.MessageBuilder.prototype.addPointsMessage = function(actor, points) {
  this.points += points;
  this._empty = false;
};

/**
 * @param {z.common.messages.level} level
 */
z.common.messages.MessageBuilder.prototype.setLevel = function(level) {
  this.level = level;
};

/**
 * @returns {z.common.messages.message}
 */
z.common.messages.MessageBuilder.prototype.build = function() {
  var message = {
    level: this.level
  };

  if (!goog.object.isEmpty(this.stockpile)) {
    message.stockpile = this.stockpile;
  }

  if (this.terrain) {
    message.terrain = this.terrain;
  }
  if (this.culled) {
    message.culled = this.culled;
  }
  if (this.text) {
    message.text = this.text;
  }
  if (this.points) {
    message.points = this.points;
  }
  message.template = this.getTemplate();

  return /** @type {z.common.messages.message} */ message;
};

/**
 * @returns {string}
 */
z.common.messages.MessageBuilder.prototype.getTemplate = function() {
  if (this.level === z.common.messages.level.IMPORTANT) {
    return 'game_over';
  } else {
    return 'chatter';
  }
};

/**
 * @returns {boolean}
 */
z.common.messages.MessageBuilder.prototype.empty = function() {
  return this._empty;
};
