goog.provide('z.entities.Actor');

goog.require('goog.array');

z.entities.Actor = function (guid) {
  this.guid = guid;
  this.name = null;
};

z.entities.Actor.prototype.perceiveWorld = function (perceivedWorldState) {
  goog.array.forEach(perceivedWorldState, function (el, i, ar) {

  });
};
