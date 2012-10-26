goog.provide('z.facet.ActionFacet');

z.facet.ActionFacet = function (gem, source, action) {
  this._gem = gem;
  this.source = source;
  this.action = action;
  this.title =  ko.observable(action.title);
  this.description = ko.observable(action.description);
  this.enabled = ko.observable(action.canExecute(source));
};

z.facet.ActionFacet.prototype.start = function () {
  //Gather all information that is needed to complete the action
  //result = ActionResult? -> Can be committed to the world.
  this.result = this.action.execute(this.source);
  if (this.result) {
    this._gem.evr.publish(new z.client.events.ActionExecutedEvent(this, result));
  }
};

