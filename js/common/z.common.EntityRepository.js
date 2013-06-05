goog.provide('z.common.EntityRepository');

goog.require('z.common.entityMap');
goog.require('mugd.utils');

/**
 * @param {!mugd.injector.ServiceHolder} services
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.common.EntityRepository = function (services) {
  /**
   * @type {!z.common.rulebook.Rulebook}
   * @private
   */
  this._rulebook = services.get(z.client.Resources.RULEBOOK);
  this._repo = {};
};

/**
 * @param {z.common.data.EntityData} entityData
 * @return {!z.common.entities.Entity}
 */
z.common.EntityRepository.prototype.put = function (entityData) {
  var entity = this.get(entityData.guid);
  var meta = this._rulebook.getMetaClass(entityData.type);
  if (goog.isNull(entity)) {
    if (goog.isNull(entityData.guid)) {
      entityData.guid = mugd.utils.getGuid();
    }
    entity = new z.common.entityMap[entityData.category](entityData, meta);
    this._repo[entity.guid] = entity;
  } else {
    entity.update(entityData, meta);
  }
  return entity;
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
z.common.EntityRepository.prototype.remove = function (guid) {
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
      /**
       * @type {!z.common.entities.Entity}
       */
      var entity = this._repo[i];
      if (filter(entity)) {
        result.push(action(entity));
      }
    }
  }
  return result;
};
