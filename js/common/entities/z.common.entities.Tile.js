goog.provide('z.common.entities.Tile');
goog.require('z.common.entities.Entity');
goog.require('goog.math.Coordinate');
goog.require('goog.object');
goog.require('z.common');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.common.entities.Entity}
 * @constructor
 */
z.common.entities.Tile = function(services) {
  goog.base(this, services);
  /**
   * @type {!z.common.data.TileData}
   */
  var tileData = /** @type {!z.common.data.TileData} */ services.get('entityData');

  /**
   * @type {!z.common.rulebook.Rulebook}
   * @private
   */
  this._rulebook = /** @type {!z.common.rulebook.Rulebook} */ services.get(z.common.Resources.RULEBOOK);

  /**
   * @type {z.common.terrain}
   */
  this.terrain = tileData.terrain;
  Object.freeze(this.terrain);
  this.position = new goog.math.Coordinate(tileData.x, tileData.y);

  /**
   * @type {!z.common.zombiedata}
   */
  this.zombieData = this._calculateZombieData(tileData.zombieData);
};
goog.inherits(z.common.entities.Tile, z.common.entities.Entity);


/**
 * @inheritDoc
 */
z.common.entities.Tile.prototype._update = function(data, meta) {
  if (!(data instanceof z.common.data.TileData)) {
    throw {
      'name': 'InvalidDataException',
      'message': 'not a z.common.data.TileData'
    };
  }

  /**
   * @type {!z.common.data.TileData}
   */
  var tileData = /** @type {!z.common.data.TileData} */ data;
  if (this.position.x !== tileData.x || this.position.y !== tileData.y || this.guid !== tileData.guid) {
    throw {
      'name': 'InvalidDataException',
      'message': 'Incorrect update data, not correct tile',
      'real x': this.position.x,
      'real y': this.position.y,
      'bad x': tileData.x,
      'bad y': tileData.y,
      'tileData': tileData,
      'guid': this.guid,
      'tileId': tileData.guid
    };
  }

  /**
   * @type {boolean}
   */
  var updated = !goog.object.every(
    this.terrain,
    function(value, key) {
      return tileData.terrain[key] === value;
    },
    this
  );

  if (!z.common.entities.Tile.equalZombieData(tileData.zombieData, this.zombieData)) {
    this.zombieData = tileData.zombieData;
    updated = true;
  }

  if (!updated) {
    updated = goog.object.getCount(this.terrain) !==
    goog.object.getCount(tileData.terrain);
  }

  this.terrain = tileData.terrain;
  Object.freeze(this.terrain);
  this.meta = meta;

  return updated;
};


/**
 * @param {!z.common.zombiedata} data
 */
z.common.entities.Tile.prototype.setZombieData = function(data) {
  var newZombieData = this._calculateZombieData(data);
  if (!z.common.entities.Tile.equalZombieData(newZombieData, this.zombieData)) {
    this.zombieData = newZombieData;
    this._dispatchModified();
  }
};

/**
 * @param {!z.common.zombiedata} data
 * @return {!z.common.zombiedata}
 */
z.common.entities.Tile.prototype._calculateZombieData = function(data) {
  var totalDefence = 0;
  var totalActivity = 0;
  var zombieData = {
    density: 0,
    defence: 0,
    attraction: 0,
    activity: 0,
    danger: 0
  };
  goog.object.map(this.terrain, function(terrain) {
    /**
     * @type {!z.common.rulebook.Terrain}
     */
    var metaClass = /** @type {!z.common.rulebook.Terrain} */ this._rulebook.getMetaClass(terrain);
    totalDefence += metaClass.defence;
    totalActivity += metaClass.activity;
  }, this);
  // TODO: add projects

  zombieData.density = data.density;
  zombieData.defence = totalDefence;
  zombieData.attraction = data.attraction;
  zombieData.activity = totalActivity;
  zombieData.danger = Math.max(data.density - totalDefence, 0);
  return zombieData;
};

/**
 * @param {!z.common.zombiedata} lhs
 * @param {!z.common.zombiedata} rhs
 * @returns {boolean}
 * @private
 */
z.common.entities.Tile.equalZombieData = function(lhs, rhs) {
  return (lhs.density === rhs.density) &&
  (lhs.defence === rhs.defence) &&
  (lhs.attraction === rhs.attraction) &&
  (lhs.activity === rhs.activity) &&
  (lhs.danger === rhs.danger);
};