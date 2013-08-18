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
  /**
   * @expose
   * @type {function (Array=):!Array}}
   */
  this.visibleTiles = ko.observableArray();
  /**
   * @expose
   * @type {function(number=): number}
   */
  this.offsetX = ko.observable(-10 * 72);
  /**
   * @expose
   * @type {function(number=): number}
   */
  this.offsetY = ko.observable(-10 * (72 - 18));

  this._grid = new mugd.utils.Grid();
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
 * @expose
 * @param  {!z.client.facet.TileFacet} tileFacet
 * @return {string}
 */
z.client.facet.MapFacet.prototype.computeScreenPositionX = function (tileFacet) {
  /**
   * @type {!number}
   */
  var width = 72;
  var screenX = tileFacet.x * width - this.offsetX();
  var offset = tileFacet.y % 2 ? 0 : width / 2;
  return (screenX + offset) + 'px';
};

/**
 * @expose
 * @param {!z.client.facet.TileFacet} tileFacet
 * @return {string}
 */
z.client.facet.MapFacet.prototype.computeScreenPositionY = function (tileFacet) {
  var height = 72;
  var cut = -18;
  var screenY = tileFacet.y * ( height + cut ) - this.offsetY();
  return screenY + 'px';
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
    this.visibleTiles.push(facet);
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
