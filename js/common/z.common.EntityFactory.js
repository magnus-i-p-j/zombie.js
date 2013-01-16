goog.provide('z.common.EntityFactory');

goog.require('z.common.entities.Tile');
goog.require('mugd.utils');
goog.require('z.common.rulebook.Rulebook');
goog.require('z.common.entities.Actor');

/**
 * @param {!z.common.rulebook.Rulebook} rulebook
 * @param {!z.common.EntityRepository} repository
 * @constructor
 */
z.common.EntityFactory = function (rulebook, repository) {
  this._rulebook = rulebook;
  this._repository = repository;
};

z.common.EntityFactory.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.RULEBOOK,
  z.client.Resources.REPOSITORY
];

/**
 * @return {!z.common.entities.Actor}
 */
z.common.EntityFactory.prototype.createActor = function () {
  var actor = new z.common.entities.Actor(this._getGuid(), this._rulebook.getMetaClass('actor_player'));
  this._repository.put(actor);
  return actor;
};

/**
 * @param {!z.common.data.TileData} data
 * @return {!z.common.entities.Tile}
 */

z.common.EntityFactory.prototype.createTile = function (data) {
  // TODO: Add check that it does not exist
  var meta = this._rulebook.getMetaClass(data.type);
  data.tileId = this._getGuid();
  var tile = new z.common.entities.Tile(data, meta);
  this._repository.put(tile);
  return tile;
};

/**
 * @return {!mugd.utils.guid}
 * @private
 */
z.common.EntityFactory.prototype._getGuid = function () {
  return mugd.utils.getGuid();
};
