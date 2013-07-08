goog.provide('z.service.mapRender.ITerrainOverlayStrategy');

/**
 * @interface
 */
z.service.mapRender.ITerrainOverlayStrategy = function(){};

/**
 * @param {z.service.mapRender.TerrainOverlayQuery} query
 * @return string
 */
z.service.mapRender.ITerrainOverlayStrategy.prototype.getOverlay = function(query){};


