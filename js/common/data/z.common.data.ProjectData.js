goog.provide('z.common.data.ProjectData');

goog.require('z.common.data.EntityData');

/**
 * @param {?mugd.utils.guid} guid
 * @param {?mugd.utils.guid} ownerId
 * @param {string} type
 * @param {!z.common.protocol.state} state
 * @param {number} priority
 * @param {?mugd.utils.guid} tileId
 * @param {!Array.<!z.common.protocol.resource>} resources
 * @param {!Object.<z.common.protocol.type,number>} investment
 * @constructor
 * @implements {z.common.data.EntityData}
 */
z.common.data.ProjectData = function (guid, ownerId, type, state, priority, tileId, resources, investment) {
  this.guid = guid;
  this.ownerId = ownerId;
  this.type = type;
  this.state = state;
  this.priority = priority;
  this.tileId = tileId;
  this.resources = resources;
  this.investment = investment;
  //if (!tileId) {
  //  debugger;
  //}
};

/**
 * @param {!z.common.entities.Project} project
 * @return {!z.common.data.ProjectData}
 */
z.common.data.ProjectData.fromEntity = function (project) {
  var guid = project.guid;
  var ownerId = project.owner;
  var type = project.meta.type;
  var state = project.getState();
  var priority = project.priority;
  var tileId = project.tile;
  var resources = project.resources;
  var investment = project.investment.peekAll();
  return new z.common.data.ProjectData(guid, ownerId, type, state, priority, tileId, resources, investment);
};