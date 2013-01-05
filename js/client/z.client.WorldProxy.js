goog.provide('z.client.WorldProxy');

goog.require('goog.events.EventTarget');

goog.require('mugd.Injector');
goog.require('z.client');
goog.require('z.service.world.World');
goog.require('z.client.events.StartTurn');
goog.require('z.service.world.RandomTerrainGenerator');

/**
 * @param {string} url
 * @param {!Object} ruleset
 * @extends {goog.events.EventTarget}
 * @constructor
 */
z.client.WorldProxy = function (url, ruleset) {
  goog.base(this);

  this.url = url;
  this._world = new z.service.world.World(ruleset, new z.service.world.RandomTerrainGenerator('QWERTYUIOP'));
};

goog.inherits(z.client.WorldProxy, goog.events.EventTarget);

z.client.WorldProxy.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.WORLD_URL,
  z.client.Resources.RULESET
];

z.client.WorldProxy.prototype.tempEndTurn = function () {
  var self = this;
  var actorGuid = this._world.createActor(
      /**
       * @param {!z.common.protocol.startTurn} startTurn
       */
          function (startTurn) {
        var tiles = startTurn['tiles'];
        var e = new z.client.events.StartTurn({tiles:tiles});
        this.dispatchEvent(e);
      }
  );

};