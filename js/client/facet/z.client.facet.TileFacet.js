goog.provide('z.client.facet.TileFacet');

goog.require('z.client.facet.Facet');

/**
 *
 * @param {!z.common.entities.Tile} tile
 * @constructor
 */
z.client.facet.TileFacet = function (tile) {
  goog.base(this);

  /**
   * @type {!z.common.entities.Tile}
   * @private
   */
  this._tile = tile;

  /**
   * @type {number}
   */
  this.x =  tile.x;
  /**
   * @type {number}
   */
  this.y = tile.y;

  this.terrain = ko.observable(tile.terrain);
};

goog.inherits(z.client.facet.TileFacet, z.client.facet.Facet);


