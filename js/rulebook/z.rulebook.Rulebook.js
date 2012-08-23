bgoog.provide("z.rulebook.Rulebook");

goog.require("z.rulebook.improvements");


z.rulebook.Rulebook = function () {
};

z.rulebook.Rulebook.prototype.GetActionSpecifications = function (entity) {
  var actions = {};
  actions['improvements'] =
    goog.array.filter(z.rulebook.improvements, this.checkPrerequisites(entity));
  return actions;
};

z.rulebook.Rulebook.prototype.checkPrerequisites = function (entity) {
  return function (action) {
    var applicable = false;
    if(action.prerequisites.hasOwnProperty('entity') ){
         applicable = action.prerequisites.entity === entity;
    }
    return applicable;
  }
};