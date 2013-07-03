goog.provide('z.common.entities.Actor');

goog.require('z.common.entities.Entity');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.common.entities.Entity}
 * @constructor
 */
z.common.entities.Actor = function (services) {
  goog.base(this, services);
  this.name = null;
};

goog.inherits(z.common.entities.Actor, z.common.entities.Entity);
