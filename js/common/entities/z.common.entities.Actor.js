goog.provide('z.common.entities.Actor');

goog.require('z.common.entities.Entity');

/**
 * @param {!mugd.utils.guid} guid
 * @param {!z.common.rulebook.meta} meta
 * @extends {z.common.entities.Entity}
 * @constructor
 */
z.common.entities.Actor = function (guid, meta) {
  goog.base(this, guid, meta);
  this.name = null;
};

goog.inherits(z.common.entities.Actor, z.common.entities.Entity);
