goog.provide('z.common.entities.Project');

goog.require('z.common.data.ProjectData');
goog.require('z.common.entities.Entity');
goog.require('goog.functions');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.common.entities.Entity}
 * @constructor
 */
z.common.entities.Project = function (services) {
  goog.base(this, services);

  this.name = this.meta.name;

  /**
   * @type {!z.common.data.ProjectData}
   */
  var projectData = /** @type {!z.common.data.ProjectData} */ services.get('entityData');

  /**
   * @type {!z.common.EntityRepository}
   */
  var entityRepository = /** @type {!z.common.EntityRepository} */ services.get(z.common.Resources.REPOSITORY);

  /**
   * @type {z.common.rulebook.category}
   */
  this.category = this.meta.category;

  /**
   * @type {!z.common.protocol.state}
   */
  this.state = projectData.state;

  /**
   * @type {number}
   */
  this.priority = projectData.priority;

  if (goog.isDefAndNotNull(projectData.tileId)) {
    /**
     * @type {!z.common.entities.Tile}
     */
    this.tile = /** @type {!z.common.entities.Tile} */ entityRepository.get(projectData.tileId);
  }

  this.position = this.tile.position;

  /**
   * @type {!z.common.Stockpile}
   */
  this.investment = new z.common.Stockpile();
  this.investment.addAll(projectData.investment);

  this.completion = 0;

  //TODO: Find entities instead of id:s
  this.resources = projectData.resources;
};

goog.inherits(z.common.entities.Project, z.common.entities.Entity);

z.common.entities.Project.prototype.getRemainingCost = function () {
  return this.investment.diffAll(this.meta.cost);
};

z.common.entities.Project.prototype.invest = function (investment) {
  var previous = this.completion;
  this.investment.addAll(investment);
  this.completion = this.investment.ratioAll(this.meta.cost);
  if (previous !== this.completion) {
    this._setModified();
  }
};

/**
 * @return {Array.<Object>}
 */
z.common.entities.Project.prototype.advance = function (investment) {
  console.log('advancing project');
  console.log(this.investment.peekAll());

  this.invest(investment);
  var cost = this.getRemainingCost();
  var done = !goog.object.some(cost, goog.functions.identity);
  var effects = [];
  if (done) {
    goog.object.forEach(
      this.meta.effects,
      function (effect, key) {
        var tmp = {};
        tmp['type'] = key;
        tmp['args'] = goog.object.unsafeClone(effect);
        effects.push(tmp);
      },
      this
    );

    this._setModified();
  }
  return effects;
}
;

z.common.entities.Project.prototype._setModified = function () {
  if (this.state === z.common.protocol.state.PASS) {
    this.state = z.common.protocol.state.MODIFIED;
  }
};

/**
 * @inheritDoc
 */
z.common.entities.Project.prototype._update = function (entityData, meta, owner) {
  if (!(entityData instanceof z.common.data.ProjectData)) {
    throw {'name': 'InvalidDataException', 'message': 'not a z.common.data.ProjectData'};
  }

  var projectData = /** @type {!z.common.data.ProjectData} */ entityData;

  var updated = false;

  if (this.priority !== projectData.priority) {
    this.priority = projectData.priority;
    updated = true;
  }
  if (this.state !== projectData.state) {
    this.state = projectData.state;
    updated = true;
  }
  if (goog.isDefAndNotNull(owner) && this.owner !== owner) {
    this.owner = owner;
    updated = true;
  }

  var diff = this.investment.diffAll(projectData.investment);
  if (goog.object.some(diff, goog.functions.identity)) {
    this.investment.purgeAll();
    this.investment.addAll(projectData.investment);
    updated = true;
  }
  return updated;
};



