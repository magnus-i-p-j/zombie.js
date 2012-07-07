goog.provide('z.entities.Tile');

z.entities.Tile = function (guid, x, y, terrain) {
  if (!z.entities.Tile.isCssRegex.test(terrain)) {
    throw { name:'Not a css class' };
  }
  this.terrain = terrain;
  this.x = x;
  this.y = y;
  this.guid = guid;
};

z.entities.Tile.isCssRegex = /^[_a-zA-Z]+[_a-zA-Z0-9-]*$/;


