goog.provide('z.common.entities.Improvement');

goog.require('z.common.entities.Project');

/**
 * @param {!z.common.data.ImprovementData} tileData
 * @param {!z.common.rulebook.meta} meta
 * @extends {z.common.entities.Entity}
 * @constructor
 */
z.common.entities.Improvement = function (tileData, meta) {
  goog.base(this, tileData.guid, meta);

};
goog.inherits(z.common.entities.Improvement, z.common.entities.Project);
