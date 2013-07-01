goog.provide('z.common.entities.Project');

goog.require('z.common.data.ProjectData');
goog.require('z.common.entities.Entity');

/**
 * @param {!z.common.data.ProjectData} projectData
 * @param {!z.common.rulebook.meta} meta
 * @extends {z.common.entities.Entity}
 * @constructor
 */
z.common.entities.Project = function (projectData, meta) {
  goog.base(this, projectData.guid, meta);
  this.name = meta.name;

  /**
   * @type {z.common.rulebook.category}
   */
  this.category = projectData.category;

  /**
   * @type {!z.common.protocol.state}
   */
  this.state = projectData.state;

  /**
   * @type {number}
   */
  this.priority = projectData.priority;

  /**
   * @type {*}
   */
  this.tileId = projectData.tileId;

  //TODO: Find entities instead of id:s
  this.resources = projectData.resources;
  this.investment = projectData.investment;
};

goog.inherits(z.common.entities.Project, z.common.entities.Entity);
