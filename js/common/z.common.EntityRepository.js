goog.provide('z.common.EntityRepository');

z.common.EntityRepository = function () {
  this._repo = {};
};

/**
 * @param {z.common.entities.Entity} entity
 */
z.common.EntityRepository.prototype.put = function (entity) {
  this._repo[entity.guid] = entity;
};

/**
 * @param {mugd.utils.guid} guid
 * @return {z.common.entities.Entity} entity
 */
z.common.EntityRepository.prototype.get = function (guid) {
  var entity = this._repo[guid];
  if (goog.isDefAndNotNull(entity)) {
    return this._repo[guid];
  } else {
    return null;
  }
};

/**
 * @param {mugd.utils.guid} guid
 */
z.common.EntityRepository.prototype.delete = function (guid) {
  var entity = this.get(guid);
  if (goog.isDefAndNotNull(entity)) {
    delete this._repo[guid];
  }
};

/**
 * @param {function(!z.common.entities.Entity):*} action
 * @param {(function(!z.common.entities.Entity):boolean)=} filter
 * @return {!Array}
 */
z.common.EntityRepository.prototype.map = function (action, filter) {
  if (!goog.isDef(filter)) {
    filter = goog.functions.TRUE;
  }
  var result = [];
  for (var i in this._repo) {
    if (this._repo.hasOwnProperty(i)) {
      if (filter(this._repo[i])) {
        result.push(action(this._repo[i]));
      }
    }
  }
  return result;
};
