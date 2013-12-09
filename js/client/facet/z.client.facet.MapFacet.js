goog.provide('z.client.facet.MapFacet');

goog.require('goog.array');
goog.require('goog.math.Rect');

goog.require('z.client.facet.Facet');
goog.require('z.client.facet.TileFacet');

goog.require('mugd.injector.Injector');
goog.require('mugd.utils.Grid');
goog.require('z.client');
goog.require('z.client.events');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.client.facet.Facet}
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.client.facet.MapFacet = function (services) {
  goog.base(this);

  this._grid = new mugd.utils.Grid();

  this['tiles'] = ko.observableArray();
};

goog.inherits(z.client.facet.MapFacet, z.client.facet.Facet);

/**
 * @param {goog.events.EventTarget} parent
 */
z.client.facet.MapFacet.prototype.setParentEventTarget = function (parent) {
  goog.base(this, 'setParentEventTarget', parent);
  this.eventHandler.listen(parent, z.common.events.EventType.ENTITY_CREATED, this.doEntityCreated);
};


/**
 * @param {number} x
 * @param {number} y
 * @return {?z.client.facet.TileFacet}
 */
z.client.facet.MapFacet.prototype.getTileFacet = function (x, y) {
  var facet = this._grid.getNode(x, y);
  if (!facet) {
    facet = new z.client.facet.TileFacet(x, y);
    facet.setParentEventTarget(this);
    this._grid.setNode(x, y, facet);
    this['tiles'].push(facet);
  }
  return /** @type {?z.client.facet.TileFacet} */ (facet);
};

/**
 * @param {number} x
 * @param {number} y
 * @return {Array.<!z.client.facet.TileFacet>}
 */
z.client.facet.MapFacet.prototype.getAdjacent = function (x, y) {
  return /** @type {Array.<!z.client.facet.TileFacet>} */ this._grid.getAdjacent(x, y);
};

/**
 * @param {z.common.events.EntityCreated} event
 */
z.client.facet.MapFacet.prototype.doEntityCreated = function (event) {
  if (event.entity instanceof z.common.entities.Tile) {
    /**
     * @type {!z.common.entities.Tile}
     */
    var tile = /** @type {!z.common.entities.Tile} */event.entity;
    var facet = this.getTileFacet(tile.position.x, tile.position.y);
    facet.update(tile);
    // TODO:
  }
};
