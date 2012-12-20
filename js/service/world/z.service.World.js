goog.provide('z.service.World');

goog.require('z.common.EntityFactory');
goog.require('z.common.entities.Actor');
goog.require('goog.array');
goog.require('mugd.utils.SimplexNoise');

/**
 * @param {!Object} ruleset
 * @constructor
 */
z.service.World = function (ruleset) {
  this._rulebook = new z.common.rulebook.Rulebook(ruleset);
  this.tiles = [];
  this._entityFactory = new z.common.EntityFactory(this._rulebook);
  this.generateTiles();
};

z.service.World.prototype.endTurn = function () {
  this.tick();
};

z.service.World.prototype.tick = function () {
  var x = Math.floor(Math.random() * 21 - 10);
  var y = Math.floor(Math.random() * 21 - 10);
  var terrain = ['grass', 'water'][Math.floor(Math.random() * 2)];
  this.tiles.push(this._entityFactory.createTile(terrain, x, y));
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
        this.tiles.push(this._entityFactory.createTile('water', x, y ));
      } else if (height > hillLevel) {
        this.tiles.push(this._entityFactory.createTile('hill', x, y));
      } else {
        this.tiles.push(this._entityFactory.createTile('grass', x, y));
      }
    }
  }
};
