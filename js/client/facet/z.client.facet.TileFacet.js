goog.provide('z.client.facet.TileFacet');

goog.require('z.client.facet.Facet');

/**
 * @constructor
 * @param {z.common.entities.Tile} tile
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

  this.meta = ko.observable();
};

goog.inherits(z.client.facet.TileFacet, z.client.facet.Facet);

/**
 * @param {z.common.entities.Tile} tile
 */
z.client.facet.TileFacet.prototype.update = function (tile) {
  if (tile.x === this.x && tile.y === this.y) {
    this.terrain(tile.terrain);
    this.meta(tile.meta);
  }else {
    throw ['Wrong tile, expected (',  this.x, '; ', this.y, '), got (', tile.x, '; ', tile.y, ')'].join('');
  }
};
