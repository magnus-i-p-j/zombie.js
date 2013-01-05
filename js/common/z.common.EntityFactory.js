goog.provide('z.common.EntityFactory');

goog.require('z.common.entities.Tile');
goog.require('mugd.utils');
goog.require('z.common.rulebook.Rulebook');
goog.require('goog.events.EventTarget');
goog.require('z.common.events');

/**
 * @param {!z.common.rulebook.Rulebook} rulebook
 * @constructor
 * @extends {goog.events.EventTarget}
 */
z.common.EntityFactory = function (rulebook) {
  goog.base(this);

  this._rulebook = rulebook;

  /**
   * @type {!goog.events.EventHandler}
   * @protected
   */
  this.handler = new goog.events.EventHandler(this);
  this.handler.listen(this, z.common.events.EventType.ENTITY_DELETED, function (e) {
    this._unregisterEntity(e.target);
  });

  /**
   * @type {Object.<!mugd.utils.guid,!z.common.entities.Entity>}
   * @private
   */
  this._entities = {};
};

goog.inherits(z.common.EntityFactory, goog.events.EventTarget);

/**
 * @return {!z.common.entities.Actor}
 */
z.common.EntityFactory.prototype.createActor = function () {
};

/**
 * @param {!z.common.protocol.tile} data
 * @return {!z.common.entities.Tile}
 */
z.common.EntityFactory.prototype.putTile = function (data) {
  var tile = this.getTile(data['tileId']);
  var terrain = data['terrain'];
  var meta = this._rulebook.getMetaClass(terrain);
  if (!goog.isNull(tile)) {
    tile = new z.common.entities.Tile(mugd.utils.getGuid(), meta, data['x'], data['y'], terrain);
    this._registerEntity(tile);
  } else {
    tile.fromJSON(data, meta);
  }
  return tile;
};

/**
 * @param {!mugd.utils.guid} pos
 */
z.common.EntityFactory.prototype.getTile = function (pos) {
  // TODO: fetch tile
  // TODO: return tile or null
  return tile;
};

// GET
// DELETE
// PUT

/**
 * @param {function(z.common.entities.Entity)} fn
 * @param {Object} self
 */
z.common.EntityFactory.prototype.forEntities = function (fn, self) {
  for (var i in this._entities) {
    if (this._entities.hasOwnProperty(i)) {
      fn.call(self, this._entities[i]);
    }
  }
};

/**
 * @param {!z.common.entities.Entity} entity
 * @private
 */
z.common.EntityFactory.prototype._registerEntity = function (entity) {
  this._entities[entity.guid] = entity;
  entity.setParentEventTarget(this);
};

/**
 * @param {!z.common.entities.Entity} entity
 * @private
 */
z.common.EntityFactory.prototype._unregisterEntity = function (entity) {
  delete this._entities[entity.guid];
};
