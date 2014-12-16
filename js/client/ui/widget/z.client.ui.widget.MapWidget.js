goog.provide('z.client.ui.widget.MapWidget');

goog.require('goog.events');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.style');
goog.require('goog.math');
goog.require('goog.math.Coordinate');
goog.require('goog.array');
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
  var textures = /** @type {Object} */  services.get(z.client.Resources.TEXTURES);

  /**
   * @type {!function(number, number):number}
   */
  var tileVariationStrategy = /** @type {!function(number, number):number} */  services.get(z.client.Resources.TILE_VARIATION_STRATEGY);

  // Temporary for dev
  this._tileVariationStrategy = tileVariationStrategy;

  /**
   * @private
   * @type {function(z.client.facet.EntityFacet=):z.client.facet.EntityFacet}
   */
  this._currentTarget = /** @type {function(z.client.facet.EntityFacet=):z.client.facet.EntityFacet} */services.get(z.client.Resources.CURRENT_TARGET);


  var imapClass = /** @type {function(new:IMap,Object,Object)} */ services.get(z.client.Resources.IMAP);
  this._imap = /** @type {IMap} */ new imapClass({}, textures, tileVariationStrategy);

  /**
   * @type {goog.events.EventHandler}
   * @protected
   */
  this.eventHandler = new goog.events.EventHandler(this);
  this.eventHandler.listen(this._gem, z.client.events.EventType.START_TURN, this.doStartTurn);
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
  this._currentTarget(facet);
  var showContextMenu = new z.client.events.ShowContextMenu(facet.getTerrainMeta(), new goog.math.Coordinate(mapEvent['clientX'], mapEvent['clientY']));
  this._mapFacet.dispatchEvent(showContextMenu);
};


/**
 * @param  {!z.client.events.StartTurn} e
 */
z.client.ui.widget.MapWidget.prototype.doStartTurn = function (e) {
  goog.array.forEach(this._mapFacet['tiles'](), this._drawTile, this);
};

/**
 * @param  {!z.client.facet.TileFacet} tileFacet
 */
z.client.ui.widget.MapWidget.prototype._drawTile = function (tileFacet) {
  if (tileFacet) {
    var x = tileFacet.x;
    var y = tileFacet.y;
    var adjacent = goog.array.map(this._mapFacet.getAdjacent(x, y), function (tileFacet) {
        if (tileFacet) {
          return tileFacet['terrain']();
        } else {
          return {};
        }
      }
    );
    this._imap.drawTile(x, y, tileFacet['terrain'](), adjacent);
    if(goog.DEBUG) {
      var entity = tileFacet.entity();
      if(entity) {
        var data = entity.zombieData;
        var lines = [
          '[ ' + x + '; ' + y + ' ]',
          //'',
          //'{',
          //' activity:' + data.activity,
          //' density:' + data.density,
          //'}','',''
        ];
        this._imap.drawText(x, y, lines);
      }
    }
  }
};
