goog.provide('z.common.entities.Project');

goog.require('z.common.data.ProjectData');
goog.require('z.common.entities.Entity');
goog.require('goog.functions');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.common.entities.Entity}
 * @constructor
 */
z.common.entities.Project = function(services) {
  goog.base(this, services);

  this.name = this.meta.name;

  /**
   * @type {!z.common.data.ProjectData}
   */
  var projectData = /** @type {!z.common.data.ProjectData} */ (services.get('entityData'));

  /**
   * @type {!z.common.EntityRepository}
   */
  var entityRepository = /** @type {!z.common.EntityRepository} */ (services.get(z.common.Resources.REPOSITORY));

  /**
   * @type {z.common.rulebook.category}
   */
  this.category = this.meta.category;

  /**
   * @type {number}
   */
  this.activity = this.meta.activity;

  /**
   * @type {number}
   */
  this.priority = projectData.priority;



  /**
   * @type {?mugd.utils.guid}
   */
  this.tile = projectData.tileId;

  /**
   * @type {!z.common.Stockpile}
   */
  this.investment = new z.common.Stockpile();
  this.investment.addAll(projectData.investment);

  this.completion = 0;
  this.duration = 0;

  this.resources = projectData.resources;
};

goog.inherits(z.common.entities.Project, z.common.entities.Entity);

z.common.entities.Project.prototype.getRemainingCost = function() {
  return this.investment.diffAll(this.meta.cost);
};

z.common.entities.Project.prototype.deriveValues = function() {
  this.completion = this.investment.ratioAll(this.meta.cost);
};
z.common.entities.Project.prototype.invest = function(investment) {
  var previous = this.completion;
  this.investment.addAll(investment);
  this.deriveValues();
  if (previous !== this.completion) {
    this._setModified();
  }
};

/**
 * @param {Object.<string, number>} investment
 * @return {boolean}
 */
z.common.entities.Project.prototype.advance = function(investment) {
  var shouldTriggerComplete;
  var wasDone = !goog.object.some(this.getRemainingCost(), goog.functions.identity);
  this.invest(investment);
  this.duration += 1;

  if (!wasDone) {
    shouldTriggerComplete = !goog.object.some(this.getRemainingCost(), goog.functions.identity);
    this._setModified();
  } else {
    shouldTriggerComplete = false;
  }
  return shouldTriggerComplete;
};

/**
 * @param triggerArgs {z.common.rulebook.trigger_args}
 * @return {Array.<Object>}
 */
z.common.entities.Project.prototype.trigger = function(triggerArgs) {
  triggerArgs['duration'] = this.duration;
  var effects = [];

  goog.array.some(this.meta.triggers, function(trigger) {
    if (trigger.test(triggerArgs)) {
      effects = trigger.effects();
      return true;
    } else {
      return false;
    }
  });

  return effects;
};


/**
 * @inheritDoc
 */
z.common.entities.Project.prototype._update = function(entityData, meta, owner) {
  if (!(entityData instanceof z.common.data.ProjectData)) {
    throw {
      'name': 'InvalidDataException',
      'message': 'not a z.common.data.ProjectData'
    };
  }

  var projectData = /** @type {!z.common.data.ProjectData} */ (entityData);

  var updated = false;

  if (this.priority !== projectData.priority) {
    this.priority = projectData.priority;
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
  this.deriveValues();
  return updated;
};



