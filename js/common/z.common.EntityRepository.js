goog.provide('z.common.EntityRepository');

goog.require('mugd.utils');
goog.require('goog.events.EventTarget');
goog.require('goog.functions');
goog.require('z.common.events');
goog.require('z.common.events.EntityCreated');
goog.require('z.common.events.EntityModified');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements mugd.injector.IInjectable
 * @extends {goog.events.EventTarget}
 */
z.common.EntityRepository = function (services) {
  goog.base(this);
  /**
   * @type {!z.common.rulebook.Rulebook}
   * @private
   */
  this._rulebook = /** @type {!z.common.rulebook.Rulebook} */ services.get(z.common.Resources.RULEBOOK);

  /**
   * @type {!mugd.injector.Injector}
   * @private
   */
  this._injector = /** @type {!mugd.injector.Injector} */ services.get(z.common.Resources.INJECTOR);

  this._repo = {};
};

goog.inherits(z.common.EntityRepository, goog.events.EventTarget);

/**
 * @param {z.common.data.EntityData} entityData
 * @return {!z.common.entities.Entity}
 */
z.common.EntityRepository.prototype.put = function (entityData) {
  var entity = this.get(entityData.guid);
  var meta = this._rulebook.getMetaClass(entityData.type);
  /**
   * @type {z.common.entities.Actor}
   */
  var owner = /** @type {z.common.entities.Actor} */ this.get(entityData.ownerId);
  if (goog.isNull(entity)) {
    if (goog.isNull(entityData.guid)) {
      entityData.guid = mugd.utils.getGuid();
    }
    entity = this._injector.getResource(meta.category).With({'entityData': entityData, 'meta': meta, 'owner': owner}).New();

    this._repo[entityData.guid] = entity;
    entity.setParentEventTarget(this);

    var event = new z.common.events.EntityCreated(entity);
    this.dispatchEvent(event);
  } else {
    entity.update(entityData, meta, owner);
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
    entity.setState(z.common.protocol.state.DEAD);
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

/**
 * @param {(function(!z.common.entities.Entity):boolean)=} filter
 * @return {!Array}
 */
z.common.EntityRepository.prototype.filter = function (filter) {
  return this.map(goog.functions.identity, filter);
};

/**
 * @param {number} number
 * @param {!z.common.EntityQuery} query
 * @return {!Array}
 */
z.common.EntityRepository.prototype.choose = function (number, query) {
  var chosen = [];
  var candidates = this.filter(query.match.bind(query));
  while (number && candidates.length) {
    var index = goog.math.randomInt(candidates.length);
    var elements = candidates.splice(index, 1);
    chosen.push(elements[0]);
    number -= 1;
  }
  return chosen;
};
