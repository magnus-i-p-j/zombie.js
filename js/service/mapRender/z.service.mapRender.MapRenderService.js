goog.provide('z.service.mapRender.MapRenderService');

goog.require('z.service');
goog.require('goog.array');
goog.require('goog.object');
goog.require('z.service.exceptions.InvalidQueryStringException');
goog.require('z.service.mapRender.TerrainOverlayQuery');

/**
 * @param {Object.<string,number>} terrains
 * @param {z.service.mapRender.ITerrainOverlayStrategy}
 * @constructor
 */
z.service.mapRender.MapRenderService = function (terrains, terrainOverlayStrategy) {
  /**
   * @type {Object.<string, number>}
   * @private
   */
  this._terrains = terrains;
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
  var query = this.parseQueryString(queryString);
  var overlay = this.terrainOverlayStrategy.getOverlay(query);
  return overlay;
};

z.service.mapRender.MapRenderService.prototype.validateQueryString = function (queryString) {
  var regex = /^((?:\?[a-zA-Z0-9_]+=[a-zA-Z0-9_]+)?(?:&[a-zA-Z0-9_]+=[a-zA-Z0-9_]+)*)$/;
  if (!regex.test(queryString)) {
    throw new z.service.exceptions.InvalidQueryStringException('Invalid query string', queryString);
  }
};

/**
 * @param {string} queryString
 * @returns {z.service.mapRender.TerrainOverlayQuery}
 */
z.service.mapRender.MapRenderService.prototype.parseQueryString = function (queryString) {

  var keyValuePairs = queryString.split(['?', '&']);
  keyValuePairs.pop();
  keyValuePairs = goog.array.map(keyValuePairs, function (pair) {
    return pair.split('=');
  });

  var query = new z.service.mapRender.TerrainOverlayQuery();
  goog.array.forEach(keyValuePairs, function (pair) {
    var key = pair[0];
    var value = pair[1];
    if (query.hasOwnProperty(key)) {
      query[key] = value;
    }
  });

  if (!goog.object.every(query, goog.isDefAndNotNull)) {
    throw new z.service.exceptions.InvalidQueryStringException('Unparsable query string.', queryString);
  }

  return query;
};

/**
 * @returns {!z.service.mapRender.MapRenderService}
 */
z.service.mapRender.MapRenderService.instance = function () {
  var terrains = {
    'water': 1,
    'grass': 2,
    'hills': 3
  };
  return new z.service.mapRender.MapRenderService(terrains);
};

goog.exportSymbol('map.render', z.service.mapRender.MapRenderService.instance);