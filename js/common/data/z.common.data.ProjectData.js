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
};

/**
 * @param {!z.common.protocol.project} protocol
 * @return {!z.common.data.ProjectData}
 */
z.common.data.ProjectData.fromProtocol = function (protocol) {
  var guid         = protocol['projectId'];
  var ownerId      = protocol['ownerId'];
  var resources    = protocol['resources'];
  var investment   = protocol['investment'];
  var priority     = protocol['priority'];
  var state        = protocol['state'];
  var tileId       = protocol['tileId'];
  var type         = protocol['type'];
  return new z.common.data.ProjectData(guid, ownerId, type, state, priority, tileId, resources, investment);
};

/**
 * @param {!z.common.entities.Project} project
 * @return {!z.common.data.ProjectData}
 */
z.common.data.ProjectData.fromEntity = function (project) {
  var guid      = project.guid;
  var ownerId   = project.owner.guid;
  var type      = project.meta.type;
  var state     = project.getState();
  var priority  = project.priority;
  var tileId    = project.tile.guid;
  var resources = project.resources;
  var investment= project.investment.peekAll();
  return new z.common.data.ProjectData(guid, ownerId, type, state, priority, tileId, resources, investment);
};

/**
 * @return {!z.common.protocol.project}
 */
z.common.data.ProjectData.prototype.toProtocol = function () {
  throw {'name': 'NotImplementedException', 'message': 'toProtocol'};
};