goog.provide('z.client.facet.TileFacet');

goog.require('z.client.facet.EntityFacet');
goog.require('z.common');

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
  goog.object.forEach(obj, function (terrain) {
    if (terrain) {
      metas.push(this._rulebook.getMetaClass(terrain));
    }
  }, this);
  return metas;
};

z.client.facet.TileFacet.prototype._update = function () {
  var tile = /** @type {z.common.entities.Tile} */ this.entity;
  this['terrain'](tile.terrain);
};
