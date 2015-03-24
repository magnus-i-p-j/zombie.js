goog.provide('z.common.entities.Actor');

goog.require('z.common.entities.Entity');
goog.require('z.common.Stockpile');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.common.entities.Entity}
 * @constructor
 */
z.common.entities.Actor = function (services) {
  goog.base(this, services);
  this.name = null;
  this.owner = this.guid;

  /**
   * @type {!z.common.data.ActorData}
   */
  var actorData = /** @type {!z.common.data.ActorData} */ (services.get('entityData'));

  /**
   * @type {!z.common.Stockpile}
   */
  this.stockpile = new z.common.Stockpile();

  this.stockpile.addAll(actorData.stockpile);

  this._points = actorData.points;
};

goog.inherits(z.common.entities.Actor, z.common.entities.Entity);

z.common.entities.Actor.prototype.addPoints = function (points) {
  this._points += points;
};

z.common.entities.Actor.prototype.getPoints = function () {
  return this._points;
};

/**
 * @inheritDoc
 */
z.common.entities.Actor.prototype._update = function (entityData, meta, owner) {
  var updated = false;
  if(entityData) {
    if (entityData instanceof z.common.data.ActorData) {
      /**
       * @type {!z.common.data.ActorData}
       */
      var actorData = /** @type {!z.common.data.ActorData} */ (entityData);
      this.stockpile.purgeAll();
      this.stockpile.addAll(actorData.stockpile);
      this._points = actorData.points;
      updated = true;
    } else {
      throw 'InvalidDataException: not a z.common.data.ActorData';
    }
  }
  return updated;
};

