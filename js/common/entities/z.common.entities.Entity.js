goog.provide('z.common.entities.Entity');

goog.require('goog.events.EventTarget');

/**
 * @param {!mugd.utils.guid} guid
 * @param {!z.common.rulebook.meta} meta
 * @extends {goog.events.EventTarget}
 * @constructor
 */
z.common.entities.Entity = function (guid, meta) {
  goog.base(this);
  this.guid = guid;
  this.meta = meta;

  /**
   * {goog.math.Coordinate}
   */
  this.position = null;
};

/**
 * @param {!z.common.data.EntityData} entityData
 * @param {!z.common.rulebook.meta} meta
 */
z.common.entities.Entity.prototype.update = function(entityData, meta){
  throw {'name': 'NotImplementedException', 'message': 'update'};
};

goog.inherits(z.common.entities.Entity, goog.events.EventTarget);

