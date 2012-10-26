goog.provide('z.facet.ImprovementFacet');

/**
 * @param {!z.entities.Tile} targetTile
 * @param {string} improvementType
 * @constructor
 */
z.facet.ImprovementFacet = function(targetTile, improvementType){
  this.targetTile = targetTile;
  this.improvementType = improvementType;
  this.resources = ko.observableArray();
};
