goog.provide('z.common.data.ImprovementData');

goog.require('z.common.data.ProjectData');

/**
 * @param {!mugd.utils.guid} guid
 * @param {!mugd.utils.guid} ownerId
 * @param {string} type
 * @param {!z.common.protocol.state} state
 * @param {number} priority
 * @param {!mugd.utils.guid} tileId
 * @param {!Array.<!z.common.protocol.resource>} resources
 * @param {!Object.<z.common.protocol.type,number>} investment
 * @constructor
 * @extends {z.common.data.ProjectData}
 */
z.common.data.ImprovementData = function (guid, ownerId, type, state, priority, tileId, resources, investment) {
  goog.base(this, guid, ownerId, type, state, priority, tileId, resources, investment);
};
