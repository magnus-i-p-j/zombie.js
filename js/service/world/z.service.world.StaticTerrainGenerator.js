goog.provide('z.service.world.StaticTerrainGenerator');

goog.require('mugd.injector.Injector');
goog.require('z.service');
goog.require('z.service.world.ITerrainGenerator');
goog.require('z.common.data.TileData');

goog.require('goog.array');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements {z.service.world.ITerrainGenerator}
 * @implements {mugd.injector.IInjectable}
 */
z.service.world.StaticTerrainGenerator = function(services) {
  /**
   * @type {*}
   */
  var map = /** @type {*} */ services.get(z.service.Resources.TERRAIN_MAP);

  /**
   * @type {!z.service.world.ITerrainGenerator}
   * @private
   */
  this._randomTerrain = /** @type {!z.service.world.ITerrainGenerator} */services.get(z.service.Resources.TERRAIN_RANDOM_GENERATOR);

  /**
   * @type {Array}
   * @private
   */
  this._baseTerrains = [];
  /**
   * @type {Object.<string,Array<string>>}
   * @private
   */
  this._terrains = {};

  this._offset = {
    x: 0,
    y: 0
  };

  this._internalMap = this.parseMap(map);
};

/**
 * @inheritDoc
 */
z.service.world.StaticTerrainGenerator.prototype.generateTerrain = function(x, y) {
  var data;
  //var terrain = {};
  //terrain['base'] = this.getTerrain(this._baseTerrains, x, y);

  var terrain = goog.object.map(this._terrains, function(t) {
    return this.getTerrain(t, x, y);
  }, this);

  if (terrain['base']) {
    data = new z.common.data.TileData(null, z.common.protocol.state.MODIFIED, null, x, y, terrain, 'tile', this.newEmptyZombieData());
  } else {
    data = this._randomTerrain.generateTerrain(x, y);
  }

  return data;
};

z.service.world.StaticTerrainGenerator.prototype.getTerrain = function(source, x, y) {
  var _x = x + this._offset.x;
  var _y = -1*(y + this._offset.y);

  if (source[_y] && source[_y][_x]) {
    return source[_y][_x];
  } else {
    return '';
  }

};


z.service.world.StaticTerrainGenerator.prototype.parseMap = function(map) {
  this._offset.x = -1*map['left'];
  this._offset.y = -1*map['top'];

  var terrainMap = map['terrains'];
  var terrainFromChar = function(c) {
    return terrainMap[c];
  };

  var terrainRowFromString = function(str) {
    return goog.array.map(str, terrainFromChar);
  }

  var parseTerrain = function(arr) {
    return goog.array.map(arr, terrainRowFromString);
  }

  //this._baseTerrains = goog.array.map(map['map']['base'], terrainRowFromString);

  this._terrains = goog.object.map(map['map'], parseTerrain);

  console.log(this._terrains);

};

/**
 * @returns {z.common.zombiedata}
 */
z.service.world.StaticTerrainGenerator.prototype.newEmptyZombieData = function() {
  return {
    density: 10,
    defence: 0,
    attraction: 0,
    activity: 0,
    danger: 0
  };
};