goog.provide('z.common.data.ImprovementData');

goog.require('z.common.data.ProjectData');

/**
 * @param {!mugd.utils.guid} guid
 * @param {string} type
 * @param {!z.common.protocol.state} state
 * @param {number} priority
 * @param {!mugd.utils.guid} tileId
 * @param {!Array.<!z.common.protocol.resource>} resources
 * @param {!Object.<z.common.protocol.type,number>} investment
 * @constructor
 * @extends {z.common.data.ProjectData}
 */
z.common.data.ImprovementData = function (guid, type, state, priority, tileId, resources, investment) {
  goog.base(this, guid, z.common.rulebook.category.IMPROVEMENT, type, state, priority, tileId, resources, investment);
};

/**
 * @param {!z.common.protocol.improvement} protocol
 * @return {!z.common.data.ImprovementData}
 */
z.common.data.ImprovementData.fromProtocol = function (protocol) {
  return new z.common.data.ImprovementData(
      protocol['projectId'],
      protocol['type'],
      protocol['state'],
      protocol['priority'],
      protocol['tileId'],
      protocol['resources'],
      protocol['investment']
  );
};

/**
 * @param {!z.common.entities.Improvement} improvement
 * @return {!z.common.protocol.improvement}
 */
z.common.data.ImprovementData.toProtocol = function (improvement) {
  // TODO: Finish toProtocol when entity is finishedish.
};