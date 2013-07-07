goog.provide('z.common.data.ProjectData');

goog.require('z.common.data.EntityData');

/**
 * @param {?mugd.utils.guid} guid
 * @param {!z.common.rulebook.category} category
 * @param {string} type
 * @param {!z.common.protocol.state} state
 * @param {number} priority
 * @param {?mugd.utils.guid} tileId
 * @param {!Array.<!z.common.protocol.resource>} resources
 * @param {!Object.<z.common.protocol.type,number>} investment
 * @constructor
 * @implements {z.common.data.EntityData}
 */
z.common.data.ProjectData = function (guid, category, type, state, priority, tileId, resources, investment) {
  this.guid = guid;
  this.category = category;
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
  throw {'name': 'NotImplementedException', 'message': 'fromProtocol'};
};

/**
 * @param {!z.common.entities.Project} project
 * @return {!z.common.protocol.project}
 */
z.common.data.ProjectData.toProtocol = function (project) {
  throw {'name': 'NotImplementedException', 'message': 'toProtocol'};
};