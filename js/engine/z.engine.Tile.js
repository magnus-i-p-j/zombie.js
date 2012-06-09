goog.provide('z.engine.Tile');

z.engine.Tile = function (tile) {
  if (!z.engine.Tile.isCssRegex.test(tile.terrain)) {
    throw { name:'Not a css class' };
  }
  this.terrain = tile.terrain;
};

z.engine.Tile.isCssRegex = /^[_a-zA-Z]+[_a-zA-Z0-9-]*$/;


