goog.provide('z.entities.Entity');

/**
 * @param {!z.utils.guid} guid
 * @param {!z.rulebook.meta} meta
 */
z.entities.Entity = function (guid, meta) {
  this.guid = guid;
  this.meta = meta;
};

