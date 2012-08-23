goog.provide('z.facet.ActionFacet');

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
  this.result = this.action.execute(this.source);
  if (this.result) {
    this._commit();
  }
};

z.facet.ActionFacet.prototype.redo = function () {
  //redo the action with all the previous choices
  if (this.result) {
    this._commit();
  }
};

z.facet.ActionFacet.prototype._commit = function () {
  //commit via evr in gem or something else?
};
