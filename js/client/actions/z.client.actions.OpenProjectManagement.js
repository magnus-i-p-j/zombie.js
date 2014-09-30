goog.provide('z.client.actions.OpenProjectManagement');
goog.require('goog.debug.Logger');
goog.require('z.client.facet.ProjectManagementFacet');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 * @implements {mugd.injector.IInjectable}
 * @extends {z.client.action.Action}
 */
z.client.actions.OpenProjectManagement = function(services) {
  goog.base(this, 'Open project management');
  /**
   * @type {!z.client.facet.ModalFacet}
   * @private
   */
  this._modalFacet = /** @type {!z.client.facet.ModalFacet} */ services.get(z.client.Resources.MODAL_FACET);

  /** @type {!mugd.injector.Injector} */
  this.injector = /** @type {!mugd.injector.Injector} */ services.get(z.common.Resources.INJECTOR);

  this.meta = {
    'type': 'action_open_project_management',
    'category': z.common.rulebook.category.ACTION,
    'name': 'Projects',
    'description': 'Opens the project management view'
  };
};
goog.inherits(z.client.actions.OpenProjectManagement, z.client.action.Action);

/**
 * @override
 */
z.client.actions.OpenProjectManagement.prototype._canExecuteInternal = function(args) {
  return true;
};

/**
 * @override
 */
z.client.actions.OpenProjectManagement.prototype._executeInternal = function(args) {
  var facet = this.injector.Compose(z.client.facet.ProjectManagementFacet).New();
  this._modalFacet['facet'](facet);
  this._logger.info('Create the project management view');
};

/**
 * @type {!goog.debug.Logger}
 * @protected
 */
z.client.actions.OpenProjectManagement.prototype._logger = goog.debug.Logger.getLogger('z.client.actions.OpenProjectManagement');



