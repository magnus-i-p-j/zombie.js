goog.provide('z.client.GameSession');

goog.require('mugd.Injector');
goog.require('z.client');

z.client.GameSession = function (world) {
  this.world = world;
};

z.client.GameSession.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.WORLD
];


z.client.GameSession.prototype.start = function () {
};