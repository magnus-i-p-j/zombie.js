goog.provide('z.service.world.WorkCalculator');

goog.require('z.common.Stockpile');

/**
 * @constructor
 */
z.service.world.WorkCalculator = function() {
  /**
   * @type {!z.common.Stockpile}
   * @private
   */
  this._work = new z.common.Stockpile();
}

/**
 * @param {!z.common.entities.Entity} entity
 * @return {*}
 */
z.service.world.WorkCalculator.prototype.calculateWork = function(entity) {

  if (!(entity instanceof z.common.entities.Character)) {
    throw {'name': 'InvalidDataException', 'message': 'not a z.common.entities.Character'};
  }

  var character = /** @type{z.common.entities.Character} */ (entity);
  this._work.add(z.common.STATIC + 'combat', character.combat);
  this._work.add(z.common.STATIC + 'knowledge', character.knowledge);
  this._work.add(z.common.STATIC + 'labour', character.labour);
};

/**
 * @returns {!z.common.Stockpile}
 */
z.service.world.WorkCalculator.prototype.getWork = function() {
  return this._work;
}

/**
 * @param {!z.common.EntityRepository} repository
 * @param {(function(!z.common.entities.Entity):boolean|z.common.EntityQuery)=} filter
 * @returns {!z.common.Stockpile}
 */
z.service.world.WorkCalculator.calculateWithRepository = function(repository, filter) {
  var workCalculator = new z.service.world.WorkCalculator();
  repository.map(workCalculator.calculateWork.bind(workCalculator), filter);
  return workCalculator.getWork();
}
