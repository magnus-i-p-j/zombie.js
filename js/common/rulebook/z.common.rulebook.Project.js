goog.provide('z.common.rulebook.Project');

goog.require('z.common.rulebook.logic');
goog.require('z.common.rulebook');

goog.require('goog.array');


/**
 * @param {!z.common.rulebook.project} project
 * @constructor
 */
z.common.rulebook.Project = function (project) {
  /**
   * @type {!z.common.rulebook.project}
   * @private
   */
  this._project = project;

  /**
   * @type {string}
   */
  this.type = this._project.type;
  /**
   * @type {z.common.rulebook.category}
   */
  this.category = z.common.rulebook.category.PROJECT;
  /**
   * @type {string}
   */
  this.name = this._project.name;
  /**
   * @type {string}
   */
  this.description = this._project.description;

  this.cost = {};
  goog.array.forEach(
      this._project['cost']['stockpile'],
      function (item) {
        var name = item['type'];
        this.cost[name] = item['amount'];
      }, this
  );

  this.effects = this._project.effects;

};

/**
 * @param {!z.common.entities.Entity} target
 * @return {boolean}
 */
z.common.rulebook.Project.prototype.isApplicable = function (target) {
  for (var key in this._project['prerequisites']) {
    if (this._project['prerequisites'].hasOwnProperty(key)) {
      if (!z.common.rulebook.logic.prerequisites[key](this._project['prerequisites'][key], target)) {
        return false;
      }
    }
  }
  return true;
};

z.common.rulebook.Project.prototype.createNewProjectData = function () {
  var projectData = new z.common.data.ProjectData(
      null, null, this.type, z.common.protocol.state.MODIFIED, 0, null, [], {}
  );
  return projectData;
};




