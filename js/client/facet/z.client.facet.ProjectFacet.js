goog.provide('z.client.facet.ProjectFacet');

goog.require('z.client.facet.EntityFacet');
goog.require('z.client.facet.CharacterListFacet');
goog.require('z.common.EntityQuery');
goog.require('z.client');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @implements mugd.injector.IInjectable
 * @extends {z.client.facet.EntityFacet}
 * @constructor
 */
z.client.facet.ProjectFacet = function (services) {
  goog.base(this);
  this['completion'] = ko.observable(0);
  this['completionPercent'] = ko.computed(function () {
    return this['completion']() * 100;
  }, this);

  var workforceQuery = new z.common.EntityQuery();
  workforceQuery.match = function(entity){
    console.log('Running workforceQuery');
    if (entity instanceof z.common.entities.Character) {
      var character = /** @type {!z.common.entities.Character} */ entity;
      return character.assignedTo === this.entity().id;
    }
    return false;
  };
  this['workforce'] = /** @type {function(z.client.facet.CharacterListFacet=):z.client.facet.CharacterListFacet} */ services.get(z.client.Resources.CHARACTER_LIST_FACET);
  this['remove'] = ko.observable(false);
  this['remove'].subscribe(this.handleRemoveSubscribe, this);
};

goog.inherits(z.client.facet.ProjectFacet, z.client.facet.EntityFacet);

z.client.facet.ProjectFacet.prototype._update = function () {
  var project = /** @type {z.common.entities.Project} */ this.entity();
  var state = project.getState();
  this['remove'](state === z.common.protocol.state.KILL || state === z.common.protocol.state.DEAD);
  this['completion'](project.completion);
};

z.client.facet.ProjectFacet.prototype.handleRemoveSubscribe = function (value) {
  if (value) {
    this.entity().setState(z.common.protocol.state.KILL);
  } else {
    this.entity().setState(z.common.protocol.state.MODIFIED);
  }
};
