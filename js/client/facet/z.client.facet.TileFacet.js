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
   * @type {number}
   */
  this.x =  x;
  /**
   * @type {number}
   */
  this.y = y;

  this.terrain = ko.observable('unknown');
};

goog.inherits(z.client.facet.TileFacet, z.client.facet.EntityFacet);

/**
 * @param {z.common.entities.Tile} tile
 */
z.client.facet.TileFacet.prototype.update = function (tile) {
  goog.base(this, 'update', tile);
  if (tile.x === this.x && tile.y === this.y) {
    this.terrain(tile.terrain);
  }else {
    throw ['Wrong tile, expected (',  this.x, '; ', this.y, '), got (', tile.x, '; ', tile.y, ')'].join('');
  }
};
