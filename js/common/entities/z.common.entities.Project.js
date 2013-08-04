goog.provide('z.common.entities.Project');

goog.require('z.common.data.ProjectData');
goog.require('z.common.entities.Entity');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.common.entities.Entity}
 * @constructor
 */
z.common.entities.Project = function (services) {
  goog.base(this, services);

  this.name = this.meta.name;

  /**
   * @type {!z.common.data.ProjectData}
   */
  var projectData = /** @type {!z.common.data.ProjectData} */ services.get('entityData');

  /**
   * @type {!z.common.EntityRepository}
   */
  var entityRepository = /** @type {!z.common.EntityRepository} */ services.get(z.common.Resources.REPOSITORY);

  /**
   * @type {z.common.rulebook.category}
   */
  this.category = this.meta.category;

  /**
   * @type {!z.common.protocol.state}
   */
  this.state = projectData.state;

  /**
   * @type {number}
   */
  this.priority = projectData.priority;

  /**
   * @type {!z.common.entities.Tile}
   */
  this.tile = /** @type {!z.common.entities.Tile} */ entityRepository.get(projectData.tileId);

  this.position = this.tile.position;

  //TODO: Find entities instead of id:s
  this.resources = projectData.resources;
  this.investment = projectData.investment;
};

goog.inherits(z.common.entities.Project, z.common.entities.Entity);
