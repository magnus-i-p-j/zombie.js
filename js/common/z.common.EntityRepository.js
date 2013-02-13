goog.provide('z.common.EntityRepository');

goog.require('z.common.entityMap');

/**
 * @param {!z.common.rulebook.Rulebook} rulebook
 * @constructor
 */
z.common.EntityRepository = function (rulebook) {
  this._rulebook = rulebook;
  this._repo = {};
};

z.common.EntityRepository.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.RULEBOOK
];

/**
 * @param {z.common.data.EntityData} entityData
 * @return {z.common.entities.Entity}
 */
z.common.EntityRepository.prototype.put = function (entityData) {
  var entity = this.get(entityData.guid);
  var meta = this._rulebook.getMetaClass(entityData.type);
  if(goog.isNull(entity)){
    entity = new z.common.entityMap[entityData.category](entityData.guid, meta);
    this._repo[entity.guid] = entity;
  }else{
    entity.update(entityData, meta);
  }
  return entity;
};

//TODO: continue on repo and everything else it affects

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
      if (filter(this._repo[i])) {
        result.push(action(this._repo[i]));
      }
    }
  }
  return result;
};
