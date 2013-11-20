goog.provide('z.client.ui.widget.MapWidget');

goog.require('goog.events');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('goog.math');
goog.require('goog.math.Coordinate');
goog.require('mugd.ui.MapScroller');
goog.require('mugd.injector.Injector');
goog.require('z.client');
goog.require('z.client.events.ShowContextMenu');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements mugd.injector.IInjectable
 */
z.client.ui.widget.MapWidget = function (services) {
  /**
   * @type {!z.client.facet.MapFacet}
   * @private
   */
  this._mapFacet = /** @type {!z.client.facet.MapFacet} */ services.get(z.client.Resources.MAP_FACET);
  /**
   * @type {!z.client.facet.Gem}
   * @private
   */
  this._gem = /** @type {!z.client.facet.Gem} */ services.get(z.client.Resources.GEM);

  /**
   * @type {Object}
   */
  var textures =/** @type {Object} */  services.get(z.client.Resources.TEXTURES);

  var imapClass = /** @type {function(new:IMap,Object,Object)} */ services.get(z.client.Resources.IMAP);
  this._imap = /** @type {IMap} */ new imapClass({}, textures);

  var self = this;
  ko.computed(
      function () {
        var newTile = self._mapFacet['newTile']();
        if (newTile) {
          self._imap.drawTile(newTile.x, newTile.y, newTile.type());
        }
      }
  );

};

z.client.ui.widget.MapWidget.prototype.claim = function (targetElement) {
  this.targetElement = targetElement;

  this._imap.claim(targetElement.id);

  this._imap.onTileFocused(this.onTileClicked.bind(this));

  this._imap.onTileContext(this.onShowContextMenu.bind(this));
  this._imap.onTileContext(this.onShowContextMenu.bind(this));

  // Prevent standard context menu from showing.
  goog.events.listen(this.targetElement, goog.events.EventType.CONTEXTMENU, goog.events.Event.preventDefault, false);
};

/**
 * @param {mapEvent} mapEvent
 */
z.client.ui.widget.MapWidget.prototype.onTileClicked = function (mapEvent) {
  this._gem['currentTarget'](this._mapFacet.getTileFacet(mapEvent['tileX'], mapEvent['tileY']));
};

/**
 * @param {mapEvent} mapEvent
 */
z.client.ui.widget.MapWidget.prototype.onShowContextMenu = function (mapEvent) {
  var facet = this._mapFacet.getTileFacet(mapEvent['tileX'], mapEvent['tileY']);
  var showContextMenu = new z.client.events.ShowContextMenu([facet], new goog.math.Coordinate(mapEvent['clientX'], mapEvent['clientY']));
  this._mapFacet.dispatchEvent(showContextMenu);
};