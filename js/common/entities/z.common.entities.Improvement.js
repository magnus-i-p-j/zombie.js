goog.provide('z.common.entities.Improvement');

goog.require('z.common.entities.Project');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.common.entities.Project}
 * @constructor
 */
z.common.entities.Improvement = function (services) {
  goog.base(this, services);
};

goog.inherits(z.common.entities.Improvement, z.common.entities.Project);
