goog.provide('z.client.actions.AssignCharacterToProject');

goog.require('z.client.action.Action');
goog.require('goog.debug.Logger');
goog.require('z.common');

/**
 * @param {!z.client.facet.CharacterFacet} character
 * @extends {z.client.action.Action}
 * @constructor
 */
z.client.actions.AssignCharacterToProject = function () {
  var name = "Assigns a character to a project";
  goog.base(this, name);

  this.meta = {
    type: 'assign_character_to_a_project',
    category: z.common.rulebook.category.ACTION,
    name: name,
    description: name
  };

};
goog.inherits(z.client.actions.AssignCharacterToProject, z.client.action.Action);

/**
 * @type {!goog.debug.Logger}
 * @protected
 */
z.client.actions.AssignCharacterToProject.prototype._logger = goog.debug.Logger.getLogger('z.client.actions.AssignCharacterToProject');

/**
 * @override
 */
z.client.actions.AssignCharacterToProject.prototype._canExecuteInternal = function (args) {
  var target = args[z.client.action.ArgsType.TARGET];
  var asset = args[z.client.action.ArgsType.ASSET];

  var targetEntity = target.entity();
  var targetEntityOK =
    !goog.isNull(targetEntity) && targetEntity.meta.category === z.common.rulebook.category.PROJECT;

  var assetEntity = asset.entity();
  var assetEntityOK =
    !goog.isNull(assetEntity) && assetEntity.meta.category === z.common.rulebook.category.CHARACTER_TYPE;

  return targetEntityOK && assetEntityOK;
};

/**
 * @override
 */
z.client.actions.AssignCharacterToProject.prototype._executeInternal = function (args) {
  var target = args[z.client.action.ArgsType.TARGET];
  var asset = args[z.client.action.ArgsType.ASSET];

  var targetEntity = target.entity();
  var assetEntity = asset.entity();

  this._logger.info('Assign ' + assetEntity.name + ' to ' + targetEntity.name);

  assetEntity.assignTo(targetEntity.guid);
};

z.client.actions.AssignCharacterToProject.prototype.args = [
  z.client.action.ArgsType.TARGET,
  z.client.action.ArgsType.ASSET
];


