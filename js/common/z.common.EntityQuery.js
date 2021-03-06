goog.provide('z.common.EntityQuery');
goog.provide('z.common.EntityEmptyQuery');


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

  //TODO: Assume alive is true instead
  /**
   * @type {boolean}
   */
  this.alive = false;
};

/**
 * @param {!z.common.entities.Entity} entity
 * @return {boolean}
 */
z.common.EntityQuery.prototype.match = function (entity) {
  if (this.alive && !entity.isAlive()) {
    return false;
  } else if (this.owner && !entity.owner) {
    return false;
  } else if (this.owner && entity.owner !== this.owner) {
    return false;
  } else if (this.category && entity.meta.category !== this.category) {
    return false;
  } else {
    return true;
  }
};


/**
 * @return {!z.common.EntityQuery}
 */
z.common.EntityQuery.empty = function () {
  return new z.common.EntityEmptyQuery();
};

/**
 * @extends {z.common.EntityQuery}
 * @constructor
 */
z.common.EntityEmptyQuery = function () {
  goog.base(this);
};

goog.inherits(z.common.EntityEmptyQuery, z.common.EntityQuery);

/**
 * @param {!z.common.entities.Entity} entity
 * @return {boolean}
 */
z.common.EntityEmptyQuery.prototype.match = function (entity) {
  return true;
};