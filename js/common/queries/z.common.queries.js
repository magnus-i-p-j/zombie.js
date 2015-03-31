goog.provide('z.common.queries');

goog.require('z.common.EntityQuery');

/**
 * @param {!mugd.utils.guid} ownerGuid
 * @returns {z.common.EntityQuery}
 */
z.common.queries.getUnassignedQuery = function(ownerGuid) {
  var entityQuery = new z.common.EntityQuery();
  entityQuery.match = function(entity) {
    return entity.owner === ownerGuid
      && entity.meta['category'] === z.common.rulebook.category.CHARACTER_TYPE
      && !entity.assignedTo
        // TODO: make state queries easier to not get wrong
      && entity.getState() !== z.common.protocol.state.KILL
      && entity.getState() !== z.common.protocol.state.DEAD;
  };
  return entityQuery;
};