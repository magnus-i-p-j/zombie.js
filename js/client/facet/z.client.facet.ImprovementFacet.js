goog.provide('z.client.facet.ImprovementFacet');

/**
 * @param {!z.common.entities.Tile} targetTile
 * @param {string} improvementType
 * @constructor
 */
z.client.facet.ImprovementFacet = function(targetTile, improvementType){
  this.targetTile = targetTile;
  this.improvementType = improvementType;
  this.resources = ko.observableArray();
};
