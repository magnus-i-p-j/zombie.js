goog.provide('z.client.facet.TileFacet');

goog.require('z.client.facet.EntityFacet');

/**
 * @param {number} x
 * @param {number} y
 * @param {!z.common.rulebook.Rulebook} rulebook
 * @extends {z.client.facet.EntityFacet}
 * @constructor
 */
z.client.facet.TileFacet = function (x, y, rulebook) {
  goog.base(this);
  /**
   * @type {!z.common.rulebook.Rulebook}
   * @private
   */
  this._rulebook = rulebook;
  /**
   * @expose
   * @type {number}
   */
  this.x =  x;

  /**
   * @expose
   * @type {number}
   */
  this.y = y;

  /**
   * @type {function(z.common.terrain=):z.common.terrain}
   */
  this['terrain'] = ko.observable({});
};

goog.inherits(z.client.facet.TileFacet, z.client.facet.EntityFacet);

/**
 * @returns {Array.<!z.common.rulebook.meta>}
 */
z.client.facet.TileFacet.prototype.getTerrainMeta = function () {
  var metas = [];
  var obj = this['terrain']();
  console.log('z.client.facet.TileFacet.prototype.getTerrainMeta', obj);
  goog.object.forEach(obj, function (terrain) {
    if (terrain) {
      metas.push(this._rulebook.getMetaClass(terrain));
    }
  }, this);
  return metas;
};

/**
 * @param {z.common.entities.Tile} tile
 */
z.client.facet.TileFacet.prototype.update = function (tile) {
  this.setEntity(/** @type {!z.common.entities.Entity} */(tile));
  if (tile.position.x === this.x && tile.position.y === this.y) {
    this['terrain'](tile.terrain);
  }else {
    throw ['Wrong tile, expected (',  this.x, '; ', this.y, '), got (', tile.position.x, '; ', tile.position.y, ')'].join('');
  }
};
