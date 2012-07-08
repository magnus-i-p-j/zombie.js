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
  this.playerSession.worldUpdate({tiles:this.tiles});
};

z.engine.World.prototype.endTurn = function () {
  this.tick();
  this.playerSession.worldUpdate({tiles:this.tiles});
};

z.engine.World.prototype.tick = function () {
  var x = Math.floor(Math.random() * 21 - 10);
  var y = Math.floor(Math.random() * 21 - 10);
  var terrain = ['grass', 'water'][Math.floor(Math.random() * 2)];
  this.tiles.push(this._entityFactory.createTile(x, y, terrain));
};

z.engine.World.prototype.generateTiles = function () {
  var self = this;
  var source = 'wwwggwggwgwggw\nggwggwgwgwgwgw\ngwgwgwgwgwgwwww\ngggwgggggwggwgwggwg';
  var left = -10;
  var top = -10;
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
      c = left;
    } else {
      terrain = parseSourceItem(item);
      self.tiles.push(self._entityFactory.createTile(c, r, terrain));
      c += 1;
    }
  });

};
