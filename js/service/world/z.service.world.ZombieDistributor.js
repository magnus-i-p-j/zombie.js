goog.provide('z.service.world.ZombieDistributor');

goog.require('goog.array');
goog.require('mugd.utils.Grid');

/**
 * @constructor
 */
z.service.world.ZombieDistributor = function() {
};

/**
 * @param {!Array.<!z.common.entities.Tile>} tiles
 */
z.service.world.ZombieDistributor.prototype.distribute = function(tiles) {

  var grid = new mugd.utils.Grid();

  goog.array.forEach(tiles, function(tile) {
    var pre = tile.zombieData;
    var post = {
      density: 0,
      defence: 0,
      attraction: 0,
      activity: 0
    };

    grid.setNode(tile.x, tile.y, { pre: pre, post: post });

    post.attraction = pre.activity + pre.density;

  });

  goog.array.forEach(tiles, function(tile) {
    var node = grid.getNode(tile.x, tile.y);
    var pre =  node.pre;
    var post = node.post;


  });

};

