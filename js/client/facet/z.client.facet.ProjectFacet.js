goog.provide('z.client.facet.ProjectFacet');

goog.require('z.client.facet.EntityFacet');
goog.require('z.client.facet.CharacterListFacet');
goog.require('z.common.EntityQuery');
goog.require('z.client');
goog.require('mugd.injector.IInjectable');
goog.require('z.common.data.CharacterData');

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

  var self = this;
  var entityQueryObservable = ko.computed(
    function() {
      var workforceQuery = new z.common.EntityQuery();
      workforceQuery.match = function (entity) {
        if (entity instanceof z.common.entities.Character) {
          var character = /** @type {!z.common.entities.Character} */ entity;
          return self.entity() && character.assignedTo === self.entity().guid;
        }
        return false;
      };
      return workforceQuery;
    }
  );

  var injector = /** @type {!mugd.injector.Injector} */ services.get(z.common.Resources.INJECTOR);
  /**
   * @type {function(z.client.facet.CharacterListFacet=):z.client.facet.CharacterListFacet}
   */
  this['workforce'] = /** @type {function(z.client.facet.CharacterListFacet=):z.client.facet.CharacterListFacet} */ injector.Compose(z.client.facet.CharacterListFacet).With({'entityQueryObservable': entityQueryObservable}).New();

  this['remove'] = ko.observable(false);
  this['remove'].subscribe(this.handleRemoveSubscribe, this);


  this['assignFreeAgent'] = function(){
    if(self['workforce']['characters']().length <= 0) {
      var entityQuery = new z.common.EntityQuery();
      var player = /** @type {!z.client.facet.ActorFacet}*/ services.get(z.client.Resources.PLAYER_FACET);
      entityQuery.owner = player['guid'];
      entityQuery.category = z.common.rulebook.category.CHARACTER_TYPE;
      /**
       * @type {!z.common.EntityRepository}
       */
      var repository = /** @type {!z.common.EntityRepository} */ services.get(z.common.Resources.REPOSITORY);

      var freeAgent = null;
      var candidates = repository.choose(3, entityQuery);
      for (var i = 0; i < candidates.length; ++i) {
        if (!candidates[i].assignedTo && self['workforce']['characters']().length <= 0) {
          freeAgent = candidates[i];
          var data = z.common.data.CharacterData.fromEntity(freeAgent);
          data.assignedTo = self.entity().guid;
          freeAgent.update(data);
        }
      }
    }
  };
};

goog.inherits(z.client.facet.ProjectFacet, z.client.facet.EntityFacet);

/**
 * @param {goog.events.EventTarget} parent
 */
z.client.facet.ProjectFacet.prototype.setParentEventTarget = function (parent) {
  goog.base(this, 'setParentEventTarget', parent);
  this['workforce'].setParentEventTarget(parent);
};

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
