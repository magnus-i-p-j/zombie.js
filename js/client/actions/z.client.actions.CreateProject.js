goog.provide('z.client.actions.CreateProject');

goog.require('z.client.action.Action');
goog.require('goog.debug.Logger');
goog.require('z.common');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @extends {z.client.action.Action}
 * @constructor
 */
z.client.actions.CreateProject = function (services) {
  this.project = /** @type {!z.common.rulebook.Project} */  (services.get('current_project'));
  goog.base(this, this.project.name);

  /**
   * @type{!z.common.EntityRepository}
   * @private
   */
  this._repository = /** @type{!z.common.EntityRepository} */ (services.get(z.common.Resources.REPOSITORY));

  /**
   * @type {!z.client.facet.ActorFacet}
   * @private
   */
  this._playerFacet = /** @type {!z.client.facet.ActorFacet} */ (services.get(z.client.Resources.PLAYER_FACET));

  this.meta = {
    type: 'action_create_project' + this.project.type,
    category: z.common.rulebook.category.ACTION,
    name: this.project.name,
    description: 'Start doing the following: ' + this.project.description
  };

};
goog.inherits(z.client.actions.CreateProject, z.client.action.Action);

/**
 * @type {!goog.debug.Logger}
 * @protected
 */
z.client.actions.CreateProject.prototype._logger = goog.debug.LogManager.getLogger('z.client.actions.CreateProject');

/**
 * @override
 */
z.client.actions.CreateProject.prototype._canExecuteInternal = function (args) {
  var target = args[z.client.action.ArgsType.TARGET];
  var entity = target.entity();
  if (goog.isNull(entity) || entity.meta.category !== z.common.rulebook.category.TILE) {
    return false;
  }
  return this.project.isApplicable(entity);
};

/**
 * @override
 */
z.client.actions.CreateProject.prototype._executeInternal = function (args) {
  /**
   * @type {!z.client.facet.TileFacet}
   */
  var target = /** @type {!z.client.facet.TileFacet} */ (args[z.client.action.ArgsType.TARGET]);
  var projectData = this.project.createNewProjectData();
  projectData.tileId = target['guid'];
  projectData.ownerId = this._playerFacet['guid'];
  this._repository.put(projectData);
  this._logger.info('Create a ' + this.project.name + ' at target (' + target.entity().position.x + ';' + target.entity().position.y + ')');
};

z.client.actions.CreateProject.prototype.args = [
  z.client.action.ArgsType.TARGET
];

