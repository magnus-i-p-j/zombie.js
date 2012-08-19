goog.provide('z.facet.ActionFacet');

goog.require('z.facet.Gem');

z.facet.ActionFacet = function (gem, source, action) {
  this.gem = gem;
  this.source = source;
  this.action = action;
  this.title =  ko.observable(action.title);
  this.description = ko.observable(action.description);
};

z.facet.ActionFacet.prototype.start = function () {
  //Gather all information that is needed to complete the action
  //result = ActionResult? -> Can be committed to the world.
  this.result = action.execute(source);
  if (this.result) {
    _commit();
  }
};

z.facet.ActionFacet.prototype.redo = function () {
  //redo the action with all the previous choices
  if (this.result) {
    _commit();
  }
};

z.facet.ActionFacet.prototype._commit = function () {
  //commit via evr in gem or something else?

};
