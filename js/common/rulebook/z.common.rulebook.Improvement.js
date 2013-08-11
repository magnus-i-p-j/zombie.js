goog.provide('z.common.rulebook.Improvement');

goog.require('z.common.rulebook.logic');
goog.require('z.common.rulebook');

goog.require('goog.array');


/**
 * @param {!z.common.rulebook.improvement} improvement
 * @constructor
 */
z.common.rulebook.Improvement = function (improvement) {
  /**
   * @type {!z.common.rulebook.improvement}
   * @private
   */
  this._improvement = improvement;

  /**
   * @type {string}
   */
  this.type = this._improvement.type;
  /**
   * @type {z.common.rulebook.category}
   */
  this.category = z.common.rulebook.category.IMPROVEMENT;
  /**
   * @type {string}
   */
  this.name = this._improvement.name;
  /**
   * @type {string}
   */
  this.description = this._improvement.description;

  this.cost = {};
  goog.array.forEach(
      this._improvement['cost']['stockpile'],
      function (item) {
        var name = item['type'];
        this.cost[name] = item['amount'];
      }, this
  );
};

/**
 * @param {!z.common.entities.Entity} target
 * @return {boolean}
 */
z.common.rulebook.Improvement.prototype.isApplicable = function (target) {
  for (var key in this._improvement['prerequisites']) {
    if (this._improvement['prerequisites'].hasOwnProperty(key)) {
      if (!z.common.rulebook.logic.prerequisites[key](this._improvement['prerequisites'][key], target)) {
        return false;
      }
    }
  }
  return true;
};

z.common.rulebook.Improvement.prototype.createNewProjectData = function () {
  var projectData = new z.common.data.ProjectData(
      null, null, this.type, z.common.protocol.state.NEW, 0, null, [], {}
  );
  return projectData;
};




