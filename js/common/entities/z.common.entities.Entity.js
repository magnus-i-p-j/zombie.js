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
};

goog.inherits(z.common.entities.Entity, goog.events.EventTarget);

/**
 * @param {!z.common.data.EntityData} entityData
 * @param {!z.common.rulebook.meta} meta
 */
z.common.entities.Entity.prototype.update = function (entityData, meta) {
  throw {'name': 'NotImplementedException', 'message': 'update'};
};

