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
  this.owner = this;
  var injector = /** @type {!mugd.injector.Injector} */ services.get(z.common.Resources.INJECTOR);
  this.stockpile = injector.Compose(z.common.Stockpile).New();
};

/**
 * @inheritDoc
 */
z.common.entities.Actor.prototype._update = function (entityData, meta, owner) {
  if (!(entityData instanceof z.common.data.ActorData)) {
    throw {'name': 'InvalidDataException', 'message': 'not a z.common.data.ActorData'};
  }

  /**
   * @type {!z.common.data.ActorData}
   */
  var actorData = /** @type {!z.common.data.ActorData} */ entityData;
  this.stockpile.purge();
  this.stockpile.add(actorData.stockpile);
  return true;
};

goog.inherits(z.common.entities.Actor, z.common.entities.Entity);
