goog.provide('z.service.mapRender.MapRenderService');

goog.require('z.service');
goog.require('goog.array');
goog.require('goog.object');
goog.require('z.service.exceptions.InvalidQueryStringException');
goog.require('z.service.mapRender.TerrainOverlayQuery');

/**
 * @param {!z.service.mapRender.ITerrainOverlayStrategy}  terrainOverlayStrategy
 * @constructor
 */
z.service.mapRender.MapRenderService = function (terrainOverlayStrategy) {
  /**
   * @type {!z.service.mapRender.ITerrainOverlayStrategy}
   */
  this.terrainOverlayStrategy = terrainOverlayStrategy;
};

/**
 * @param {string} queryString
 */
z.service.mapRender.MapRenderService.prototype.getTerrainOverlay = function (queryString) {
  this.validateQueryString(queryString);
  /**
   * @type {z.service.mapRender.TerrainOverlayQuery}
   */
  var query = new z.service.mapRender.TerrainOverlayQuery(queryString);
  var overlay = this.terrainOverlayStrategy.getOverlay(query);
  return overlay;
};

z.service.mapRender.MapRenderService.prototype.validateQueryString = function (queryString) {
  var regex = /^((?:\?[a-zA-Z0-9_]+=[a-zA-Z0-9_]+)?(?:&[a-zA-Z0-9_]+=[a-zA-Z0-9_]+)*)$/;
  if (!regex.test(queryString)) {
    throw new z.service.exceptions.InvalidQueryStringException('Invalid query string', queryString);
  }
};


goog.require('z.service.mapRender.BasicTerrainOverlayStrategy');

/**
 * @returns {!z.service.mapRender.MapRenderService}
 */
z.service.mapRender.MapRenderService.instance = function () {
  var terrains = {
    'water': 1,
    'grass': 2
  };
  var tileStrategy = new z.service.mapRender.BasicTerrainOverlayStrategy(terrains);
  var svc = new z.service.mapRender.MapRenderService(tileStrategy);
  return svc;
};

goog.exportSymbol('map.render', z.service.mapRender.MapRenderService.instance);