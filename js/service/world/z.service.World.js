goog.provide('z.service.World');

goog.require('z.common.EntityFactory');
goog.require('z.common.entities.Actor');
goog.require('goog.array');
goog.require('mugd.utils.SimplexNoise');

/**
 * @param {!z.common.rulebook.Rulebook} rulebook
 * @constructor
 */
z.service.World = function (rulebook) {
  this.playerActor = new z.common.entities.Actor();
  this.tiles = [];
  this._entityFactory = new z.common.EntityFactory();
  this.generateTiles();
};

z.service.World.prototype.registerGameSession = function (gameSession) {
  this.playerSession = gameSession;
  this.playerSession.worldUpdate({tiles:this.tiles});
};

z.service.World.prototype.endTurn = function () {
  this.tick();
  this.playerSession.worldUpdate({tiles:this.tiles});
};

z.service.World.prototype.tick = function () {
  var x = Math.floor(Math.random() * 21 - 10);
  var y = Math.floor(Math.random() * 21 - 10);
  var terrain = ['grass', 'water'][Math.floor(Math.random() * 2)];
  this.tiles.push(this._entityFactory.createTile(x, y, terrain));
};

z.service.World.prototype.generateTiles = function () {
  var noise = new mugd.utils.SimplexNoise();
  var scale = .1;
  var top = -10;
  var right = 11;
  var bottom = 11;
  var left = -10;
  var waterLevel = -.2;
  var hillLevel = .6;

  for (var y = top; y < bottom; y++) {
    for (var x = left; x < right; x++) {
      var height = noise.noise(x * scale, y * scale);
      if (height < waterLevel) {
        this.tiles.push(this._entityFactory.createTile(x, y, 'water'));
      } else if (height > hillLevel) {
        this.tiles.push(this._entityFactory.createTile(x, y, 'hill'));
      } else {
        this.tiles.push(this._entityFactory.createTile(x, y, 'grass'));
      }
    }
  }
};
