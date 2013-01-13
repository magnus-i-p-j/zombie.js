goog.provide('z.common.EntityFactory');

goog.require('z.common.entities.Tile');
goog.require('mugd.utils');
goog.require('z.common.rulebook.Rulebook');

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
};

/**
 * @param {!z.common.data.TileData} data
 * @return {!z.common.entities.Tile}
 */

z.common.EntityFactory.prototype.createTile = function (data) {
  // TODO: Add check that it does not exist
  var meta = this._rulebook.getMetaClass(data.type);
  var tile = new z.common.entities.Tile(data, meta);
  this._repository.put(tile);
  return tile;
};
