goog.provide('z.common.rulebook.Project');

goog.require('z.common.rulebook');
goog.require('z.common.rulebook.logic');
goog.require('z.common.rulebook.Trigger');

goog.require('goog.array');


/**
 * @param {!z.common.rulebook.project} project
 * @constructor
 */
z.common.rulebook.Project = function(project) {
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

  /**
   * @type {number}
   */
  this.activity = this._project.activity;

  /**
   * @type {number}
   */
  this.defence = this._project.defence;

  this.cost = {};
  var stockpile = this._project['cost']['stockpile'];
  if (stockpile) {
    goog.array.forEach(
      stockpile,
      function(item) {
        var name = item['type'];
        this.cost[name] = item['amount'];
      }, this
    );
  }

  var work = this._project['cost']['work'];
  if (work) {
    goog.object.forEach(
      work,
      function(value, key) {
        var name = z.common.STATIC + key;
        this.cost[name] = value;
      }, this
    );
  }

  var time = this._project['cost']['time'];
  if(time) {
    this.cost[z.common.STATIC + 'time'] = time;
  }


  /**
   * @type {Array.<!z.common.rulebook.Trigger>}
   */
  this.triggers = goog.array.map(this._project.triggers, function(trigger) {
    return new z.common.rulebook.Trigger(trigger);
  });

};

/**
 * @param {!z.common.entities.Entity} target
 * @return {boolean}
 */
z.common.rulebook.Project.prototype.isApplicable = function(target) {
  for (var key in this._project['prerequisites']) {
    if (this._project['prerequisites'].hasOwnProperty(key)) {
      if (!z.common.rulebook.logic.prerequisites[key](this._project['prerequisites'][key], target)) {
        return false;
      }
    }
  }
  return true;
};

z.common.rulebook.Project.prototype.createNewProjectData = function() {
  var projectData = new z.common.data.ProjectData(
    null, null, this.type, z.common.protocol.state.MODIFIED, 0, null, [], {}
  );
  return projectData;
};
