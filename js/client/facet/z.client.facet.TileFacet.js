goog.provide('z.client.facet.TileFacet');

goog.require('z.client.facet.EntityFacet');

/**
 * @param {number} x
 * @param {number} y
 * @extends {z.client.facet.EntityFacet}
 * @constructor
 */
z.client.facet.TileFacet = function (x, y) {
  goog.base(this);

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
   * @expose
   * @type {function(string=):string}
   */
  this.terrain = ko.observable('unknown');
};

goog.inherits(z.client.facet.TileFacet, z.client.facet.EntityFacet);

/**
 * @param {z.common.entities.Tile} tile
 */
z.client.facet.TileFacet.prototype.update = function (tile) {
  this.setEntity(/** @type {!z.common.entities.Entity} */(tile));
  if (tile.position.x === this.x && tile.position.y === this.y) {
    this.terrain(tile.terrain);
  }else {
    throw ['Wrong tile, expected (',  this.x, '; ', this.y, '), got (', tile.position.x, '; ', tile.position.y, ')'].join('');
  }
};
