goog.provide('z.common.EntityQuery');


/**
 * @constructor
 */
z.common.EntityQuery = function () {
  /**
   * @type {?mugd.utils.guid}
   */
  this.owner = null;
  /**
   * @type {?z.common.rulebook.category}
   */
  this.category = null;
};

/**
 * @param {!z.common.entities.Entity} entity
 * @return {boolean}
 */
z.common.EntityQuery.prototype.match = function (entity) {
  if (this.owner && entity.owner.guid !== this.owner) {
    return false;
  } else if (this.category && entity.meta.category !== this.category) {
    return false;
  } else {
    return true;
  }
};