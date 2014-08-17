goog.provide('z.client.WorldProxy');

goog.require('goog.events.EventTarget');

goog.require('mugd.injector.Injector');
goog.require('z.client');
goog.require('z.service.world.World');
goog.require('z.client.events.StartTurn');
goog.require('z.service.world.RandomTerrainGenerator');
goog.require('z.common.data.StartTurnData');
goog.require('goog.array');
goog.require('z.common.data.ClientEndTurn');
goog.require('z.common.data.ActorData');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {goog.events.EventTarget}
 * @constructor
 * @implements {mugd.injector.IInjectable}
 */
z.client.WorldProxy = function(services) {
  goog.base(this);
  /**
   * @type {!Object}
   */
  var ruleset = /** @type {!Object} */services.get(z.common.Resources.RULESET);
  /**
   * @type {!z.service.world.World}
   * @private
   */
  this._world = (/** @type {function(!Object):!z.service.world.World} */ services.get(z.client.Resources.WORLD_SERVICE))(ruleset);
  /**
   * @type {!z.common.EntityRepository}
   * @private
   */
  this._repository = /** @type {!z.common.EntityRepository} */services.get(z.common.Resources.REPOSITORY);

  /**
   * @type {!z.client.facet.ActorFacet}
   * @private
   */
  this._playerFacet = /** @type {!z.client.facet.ActorFacet} */ services.get(z.client.Resources.PLAYER_FACET);
  this._turn = 0;
};

goog.inherits(z.client.WorldProxy, goog.events.EventTarget);

z.client.WorldProxy.prototype.firstTurn = function() {
  /**
   * @type {function (!z.common.data.StartTurnData)}
   */
  var callback = goog.bind(this.doStartTurn, this);
  var actorData = this._world.createPlayerActor(callback);
  this._playerFacet.setEntity(this._repository.put(actorData));
  var endTurnData = new z.common.data.ClientEndTurn(this._playerFacet['guid'], this._turn, []);
  this._world.actorEndTurn(endTurnData);
};

/**
 * @param {!z.common.data.StartTurnData} startTurnData
 */
z.client.WorldProxy.prototype.doStartTurn = function(startTurnData) {
  this._turn = startTurnData.turn;
  goog.array.forEach(startTurnData.entities, this._repository.put, this._repository);
  goog.array.forEach(startTurnData.killed, function(guid) {
    var entity = this.get(guid);
    if (!goog.isNull(entity)) {
      entity.setState(z.common.protocol.state.DEAD);
    }
  }, this._repository);

  this._repository.resetState();

  var e = new z.client.events.StartTurn({
      turn: this._turn
    }
  );
  this.dispatchEvent(e);
};

z.client.WorldProxy.prototype.endTurn = function() {
  if (goog.isNull(this._playerFacet['guid'])) {
    throw 'Tried to end turn with no actor';
  }

  var entityChanged = function(entity) {
    return entity.getState() !== z.common.protocol.state.PASS ||
    entity.getState() !== z.common.protocol.state.DEAD;
  };
  var projects = this._repository.map(
    function(item) {
      var project = /** @type {!z.common.entities.Project} */ item;
      return z.common.data.ProjectData.fromEntity(project);
    },
    function(entity) {
      if (entity instanceof z.common.entities.Project) {
        if (entityChanged(entity)) {
          return true;
        }
      }
      return false;
    }
  );

  var characters = this._repository.map(
    function(item) {
      var character = /** @type {!z.common.entities.Character} */ item;
      return z.common.data.CharacterData.fromEntity(character);
    },
    function(entity) {
      if (entity instanceof z.common.entities.Character) {
        if (entityChanged(entity)) {
          return true;
        }
      }
      return false;
    }
  );

  var data = [];
  goog.array.extend(data, projects, characters);

  var endTurnData = new z.common.data.ClientEndTurn(this._playerFacet['guid'], this._turn, data);
  this._world.actorEndTurn(endTurnData);
};