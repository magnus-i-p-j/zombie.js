goog.provide('z.client.facet.ProjectFacet');

goog.require('z.client.facet.EntityFacet');
goog.require('z.client.facet.CharacterListFacet');
goog.require('z.common.EntityQuery');
goog.require('z.client');
goog.require('mugd.injector.IInjectable');
goog.require('z.common.data.CharacterData');
goog.require('mugd.bindings.dragndrop.IDropZone');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @implements mugd.injector.IInjectable
 * @implements mugd.bindings.dragndrop.IDropZone
 * @extends {z.client.facet.EntityFacet}
 * @constructor
 */
z.client.facet.ProjectFacet = function(services) {
  goog.base(this);
  this['completion'] = ko.observable(0);
  this['completionPercent'] = ko.computed(function() {
    return this['completion']() * 100;
  }, this);

  var self = this;
  var entityQueryObservable = ko.computed(
    function() {
      var workforceQuery = new z.common.EntityQuery();
      workforceQuery.match = function(entity) {
        if (entity instanceof z.common.entities.Character) {
          var character = /** @type {!z.common.entities.Character} */ (entity);
          return !!(self.entity() && character.assignedTo === self.entity().guid);
        }
        return false;
      };
      return workforceQuery;
    }
  );

  var injector = /** @type {!mugd.injector.Injector} */ (services.get(z.common.Resources.INJECTOR));
  /**
   * @type {function(z.client.facet.CharacterListFacet=):z.client.facet.CharacterListFacet}
   */
  this['workforce'] = /** @type {function(z.client.facet.CharacterListFacet=):z.client.facet.CharacterListFacet} */ (injector.Compose(z.client.facet.CharacterListFacet).With({'entityQueryObservable': entityQueryObservable}).New());

  this['remove'] = ko.observable(false);
  this['remove'].subscribe(this.handleRemoveSubscribe, this);

  this.assignCharacterAction = new z.client.actions.AssignCharacterToProject();

};

goog.inherits(z.client.facet.ProjectFacet, z.client.facet.EntityFacet);

/**
 * @param {goog.events.EventTarget} parent
 */
z.client.facet.ProjectFacet.prototype.setParentEventTarget = function(parent) {
  goog.base(this, 'setParentEventTarget', parent);
  this['workforce'].setParentEventTarget(parent);
};

/**
 * @inheritDoc
 */
z.client.facet.ProjectFacet.prototype._update = function() {
  var project = /** @type {z.common.entities.Project} */ (this.entity());
  var state = project.getState();
  this['remove'](state === z.common.protocol.state.KILL || state === z.common.protocol.state.DEAD);
  this['completion'](project.completion);
};

z.client.facet.ProjectFacet.prototype.handleRemoveSubscribe = function(value) {
  if (value) {
    this.entity().setState(z.common.protocol.state.KILL);
  } else {
    this.entity().setState(z.common.protocol.state.MODIFIED);
  }
};

/**
 * @inheritDoc
 */
z.client.facet.ProjectFacet.prototype.canDrop = function(facet) {
  if(facet instanceof z.client.facet.CharacterFacet) {
    var args = {};
    args[z.client.action.ArgsType.TARGET] = this;
    args[z.client.action.ArgsType.ASSET] = facet;
    return this.assignCharacterAction.canExecute(args);
  }
  return false;
};

z.client.facet.ProjectFacet.prototype.doDrop = function(facet) {
  var args = {};
  args[z.client.action.ArgsType.TARGET] = this;
  args[z.client.action.ArgsType.ASSET] = facet;
  return this.assignCharacterAction.execute(args);
};
