goog.provide('z.common.entities.Entity');

/**
 * @param {!mugd.utils.guid} guid
 * @param {!z.common.rulebook.meta} meta
 * @constructor
 */
z.common.entities.Entity = function (guid, meta) {
  this.guid = guid;
  this.meta = meta;
};

