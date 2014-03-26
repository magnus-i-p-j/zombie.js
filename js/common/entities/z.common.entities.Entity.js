goog.provide('z.common.entities.Entity');

goog.require('goog.events.EventTarget');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {goog.events.EventTarget}
 * @implements mugd.injector.IInjectable
 * @constructor
 */
z.common.entities.Entity = function (services) {
  goog.base(this);
  /**
   * @type {!z.common.data.EntityData}
   */
  var entityData = /** @type {!z.common.data.EntityData} */ services.get('entityData');
  /**
   *
   * @type {!mugd.utils.guid}
   */
  this.guid = entityData.guid;
  /**
   * @type {!z.common.rulebook.meta}
   */
  this.meta = /** @type {!z.common.rulebook.meta} */ services.get('meta');

  /**
   * {goog.math.Coordinate}
   */
  this.position = null;

  /**
   * @type {!z.common.entities.Actor}
   */
  this.owner = /** @type {!z.common.entities.Actor} */ services.get('owner');

  /**
   * @private
   * @type {!z.common.protocol.state}
   */
  if(!entityData.state){
    throw {};
  }
  this._state = entityData.state;
};

goog.inherits(z.common.entities.Entity, goog.events.EventTarget);

/**
 * @return {!z.common.protocol.state} state
 */
z.common.entities.Entity.prototype.getState = function () {
  return this._state;
};

/**
 * @param {!z.common.protocol.state} state
 */
z.common.entities.Entity.prototype.setState = function (state) {
  if (this._state !== state && this._state !== z.common.protocol.state.DEAD) {
    this._state = state;
    var event = new z.common.events.EntityModified(this);
    this.dispatchEvent(event);
  }
};


/**
 * @param {!z.common.data.EntityData} entityData
 * @param {!z.common.rulebook.meta} meta
 * @param {z.common.entities.Actor} owner
 * @return {boolean}
 */
z.common.entities.Entity.prototype.update = function (entityData, meta, owner) {
  var updated = false;
  var state = entityData.state;
  if (this._state !== state) {
    this._state = state;
    updated = true;
  }
  updated = this._update(entityData, meta, owner) || updated;

  if (updated) {
    var event = new z.common.events.EntityModified(this);
    this.dispatchEvent(event);
  }
  return updated;
};

/**
 * Override this to implement entity
 *
 * @param {!z.common.data.EntityData} entityData
 * @param {!z.common.rulebook.meta} meta
 * @param {z.common.entities.Actor} owner
 * @return {boolean}
 * @protected
 */
z.common.entities.Entity.prototype._update = function (entityData, meta, owner) {
  throw {'name': 'NotImplementedException', 'message': 'update'};
};
