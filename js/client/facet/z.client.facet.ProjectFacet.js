goog.provide('z.client.facet.ProjectFacet');

goog.require('z.client.facet.EntityFacet');

/**
 * @extends {z.client.facet.EntityFacet}
 * @constructor
 */
z.client.facet.ProjectFacet = function () {
  goog.base(this);
  this['completion'] = ko.observable(0);
  this['completionPercent'] = ko.computed(function () {
    return this['completion']() * 100;
  }, this);

  this['remove'] = ko.observable(false);
  this['remove'].subscribe(this.handleRemoveSubscribe, this);
};

goog.inherits(z.client.facet.ProjectFacet, z.client.facet.EntityFacet);

z.client.facet.ProjectFacet.prototype._update = function () {
  var project = /** @type {z.common.entities.Project} */ this.entity;
  this['remove'](project.state === z.common.protocol.state.KILL);
  this['completion'](project.completion);
};

z.client.facet.ProjectFacet.prototype.handleRemoveSubscribe = function (value) {
  if (value) {
    this.entity.state = z.common.protocol.state.KILL;
  } else {
    this.entity.state = z.common.protocol.state.MODIFIED;
  }
};
