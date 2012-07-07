goog.provide('z.engine.World');
goog.require('z.engine.world.EntityFactory');

/**
 * @constructor
 */
z.engine.World = function () {
  this.playerActor = new z.entities.Actor();
};

z.engine.World.prototype.registerGameSession = function (gameSession) {
};
