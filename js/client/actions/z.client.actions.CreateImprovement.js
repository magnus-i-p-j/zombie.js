goog.provide('z.client.actions.CreateImprovement');

goog.require('z.client.action.Action');
goog.require('goog.debug.Logger');
goog.require('z.common');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.client.action.Action}
 * @constructor
 */
z.client.actions.CreateImprovement = function (services) {
  this.improvement = /** @type {!z.common.rulebook.Improvement} */  services.get('current_improvement');
  goog.base(this, this.improvement.name);

  /**
   * @type{!z.common.EntityRepository}
   * @private
   */
  this._repository = /** @type{!z.common.EntityRepository} */ services.get(z.common.Resources.REPOSITORY);

  /**
   * @type {!z.client.facet.ActorFacet}
   * @private
   */
  this._playerFacet = /** @type {!z.client.facet.ActorFacet} */ services.get(z.client.Resources.PLAYER_FACET);

  this.meta = {
    type: 'action_create_improvement' + this.improvement.type,
    category: z.common.rulebook.category.ACTION,
    name: this.improvement.name,
    description: 'Start doing the following: ' + this.improvement.description
  };

};
goog.inherits(z.client.actions.CreateImprovement, z.client.action.Action);

/**
 * @type {!goog.debug.Logger}
 * @protected
 */
z.client.actions.CreateImprovement.prototype._logger = goog.debug.Logger.getLogger('z.client.actions.CreateImprovement');

/**
 * @override
 */
z.client.actions.CreateImprovement.prototype._canExecuteInternal = function (args) {
  var target = args[z.client.action.ArgsType.TARGET];
  if (goog.isNull(target.entity) || target.entity.meta.category !== z.common.rulebook.category.TILE) {
    return false;
  }
  return this.improvement.isApplicable(target.entity);
};

/**
 * @override
 */
z.client.actions.CreateImprovement.prototype._executeInternal = function (args) {
  /**
   * @type {!z.client.facet.TileFacet}
   */
  var target = /** @type {!z.client.facet.TileFacet} */ args[z.client.action.ArgsType.TARGET];
  var projectData = this.improvement.createNewProjectData();
  projectData.tileId = target['guid'];
  projectData.ownerId = this._playerFacet['guid'];
  this._repository.put(projectData);
  this._logger.info('Create a ' + this.improvement.name + ' at target (' + target.entity.position.x + ';' + target.entity.position.y + ')');
};

z.client.actions.CreateImprovement.prototype.args = [
  z.client.action.ArgsType.TARGET
];

