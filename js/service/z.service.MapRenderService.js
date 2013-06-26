goog.provide('z.service.MapRenderService');

/**
 * @param {Object.<string,number>} terrains
 * @constructor
 */
z.service.MapRenderService = function(terrains){
  /**
   * @type {Object.<string, number>}
   * @private
   */
   this._terrains = terrains;

};

z.service.MapRenderService.prototype.getTerrainOverlay = function(queryString){
  //Todo: Continue to validate the query string.
  var regex = /^((?:\?[a-zA-Z0-9_]+=[a-zA-Z0-9_]+)?(?:&[a-zA-Z0-9_]+=[a-zA-Z0-9_]+)*)$/;
  if(!regex.test(queryString)){
    throw {'name': 'InvalidArgumentException', 'message': 'queryString'};
  }
};

/**
 * @returns {!z.service.MapRenderService}
 */
z.service.MapRenderService.instance = function(){
  var terrains = {
    'water':1,
    'grass':2,
    'hills': 3
  };
  return new z.service.MapRenderService(terrains);
};

goog.exportSymbol('map.render', z.service.MapRenderService.instance);