goog.provide('z.engine.World');

goog.require('z.engine.world.EntityFactory');
goog.require('z.entities.Actor');
goog.require('goog.array');

/**
 * @constructor
 */
z.engine.World = function () {
  this.playerActor = new z.entities.Actor();
  this.tiles = [];
  this._entityFactory = new z.engine.world.EntityFactory();
  this.generateTiles();
};

z.engine.World.prototype.registerGameSession = function (gameSession) {
  this.playerSession = gameSession;
  gameSession.worldUpdate({tiles:this.tiles});
};

z.engine.World.prototype.generateTiles = function () {
  var self = this;
  var source = 'wwwggwggwgwggw';
  var left = 0;
  var top = 0;
  var c = left;
  var r = top;
  var terrainLookup = {
    g:'grass',
    w:'water'
  };

  function parseSourceItem(item) {
    var terrain = terrainLookup[item];
    if (!terrain) {
      terrain = 'unknown';
    }
    return terrain;
  }

  goog.array.forEach(source.split(''), function (item) {
    var terrain;
    if (item === '\n') {
      r += 1;
      c = self.left;
    } else {
      terrain = parseSourceItem(item);
      self.tiles.push(self._entityFactory.createTile(c, r, terrain));
      c += 1;
    }
  });

};
