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

};

goog.inherits(z.common.entities.Entity, goog.events.EventTarget);

/**
 * @param {!z.common.data.EntityData} entityData
 * @param {!z.common.rulebook.meta} meta
 * @param {z.common.entities.Actor} owner
 * @return {boolean}
 */
z.common.entities.Entity.prototype.update = function (entityData, meta, owner) {
  var updated = this._update(entityData, meta, owner);
  if (updated) {
    var event = new z.common.events.EntityModified(this);
    this.dispatchEvent(event);
  }
  return updated;
};

/**
 * @internal Override this to implement entity
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
