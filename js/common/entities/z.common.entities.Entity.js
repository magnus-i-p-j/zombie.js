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

goog.inherits(z.common.entities.Entity, goog.events.EventTarget);

/**
 * @inheritDoc
 */
z.common.entities.Entity.prototype.disposeInternal = function(){
  goog.base(this, 'disposeInternal');
  goog.events.dispatchEvent(this, z.common.events.EventType.ENTITY_DELETED);
};