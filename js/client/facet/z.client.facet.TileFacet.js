goog.provide('z.client.facet.TileFacet');

goog.require('z.client.facet.Facet');

/**
 * @constructor
 * @param {z.common.entities.Tile} tile
 */
z.client.facet.TileFacet = function (tile) {
  goog.base(this);

  /**
   * @type {number}
   */
  this.x =  tile.x;
  /**
   * @type {number}
   */
  this.y = tile.y;

  this.terrain = ko.observable('unknown');

  this.update(tile);
};

goog.inherits(z.client.facet.TileFacet, z.client.facet.Facet);

/**
 * @param {z.common.entities.Tile} tile
 */
z.client.facet.TileFacet.prototype.update = function (tile) {
  if (tile.x === this.x && tile.y === this.y) {
    this.terrain(tile.terrain);
  }else {
    throw ['Wrong tile, expected (',  this.x, '; ', this.y, '), got (', tile.x, '; ', tile.y, ')'].join('');
  }
};
