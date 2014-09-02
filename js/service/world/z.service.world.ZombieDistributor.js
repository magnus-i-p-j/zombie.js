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

    grid.setNode(tile.position.x, tile.position.y, {
      pre: pre,
      post: post
    });

    post.attraction = Math.round(pre.activity + pre.density * Math.random());
  });

  goog.array.forEach(tiles, function(tile) {
    var node = grid.getNode(tile.position.x, tile.position.y);

    var adj = grid.getAdjacent(tile.position.x, tile.position.y);
    var pre = node.pre;
    var post = node.post;

    goog.array.forEach(adj, function(neighbour) {
      if (neighbour) {
        var greater = neighbour.post.attraction < post.attraction;
        if (greater) {
          pre.density += 1;
          if (neighbour.pre.density > 0) {
            neighbour.pre.density -= 1;
          }
        }
      } else {
        pre.density += 1;
      }
    });
  });

  goog.array.forEach(tiles, function(tile) {
    var DIFFUSION = .5;

    var node = grid.getNode(tile.position.x, tile.position.y);
    var adj = grid.getAdjacent(tile.position.x, tile.position.y);
    var pre = node.pre;
    var post = node.post;

    var nAdj = adj.length;

    var diffusion = Math.floor(node.pre.density * DIFFUSION / nAdj);

    post.density = post.density + pre.density - diffusion * nAdj;

    goog.array.forEach(adj, function(neighbour) {
      if (neighbour) {
        neighbour.post.density += diffusion;
      } else {
        post.density += diffusion;
      }
    });
  });

  goog.array.forEach(tiles, function(tile) {
    var node = grid.getNode(tile.position.x, tile.position.y);
    tile.setZombieData(node.post);
  });

};

