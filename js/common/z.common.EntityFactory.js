goog.provide('z.common.EntityFactory');

goog.require('z.common.entities.Tile');
goog.require('mugd.utils');
goog.require('z.common.rulebook.Rulebook');
goog.require('goog.events.EventTarget');
goog.require('z.common.events');

/**
 * @param {!z.common.rulebook.Rulebook} rulebook
 * @constructor
 */
z.common.EntityFactory = function (rulebook) {
  goog.base(this);

  this._rulebook = rulebook;

  /**
   * @type {!goog.events.EventHandler}
   * @protected
   */
  this.handler = new goog.events.EventHandler(this);
  this.handler.listen(this, z.common.events.EventType.ENTITY_DELETED, function(e){
    this._unregisterEntity(e.target);
  });

  /**
   * @type {Object.<!mugd,utils.guid,!z.common.entities.Entity>}
   * @private
   */
  this._entities = {};
};

goog.inherits(z.common.EntityFactory, goog.events.EventTarget);

z.common.EntityFactory.prototype.createActor = function () {
};

/**
 * @param {string} terrain
 * @param {number} x
 * @param {number} y
 * @return {!z.common.entities.Tile}
 */
z.common.EntityFactory.prototype.createTile = function (terrain, x, y) {
  var meta = this._rulebook.getMetaClass(terrain);
  var tile =  new z.common.entities.Tile(mugd.utils.getGuid(), meta, x, y, terrain);
  this._registerEntity(tile);
  return tile;
};

/**
 * @param {!z.common.entities.Entity} entity
 * @private
 */
z.common.EntityFactory.prototype._registerEntity = function(entity){
  this._entities[entity.guid] = entity;
  entity.setParentEventTarget(this);
};

/**
 * @param {!z.common.entities.Entity} entity
 * @private
 */
z.common.EntityFactory.prototype._unregisterEntity = function(entity){
  delete this._entities[entity.guid];
};
