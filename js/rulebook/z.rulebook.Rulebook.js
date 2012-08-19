goog.provide("z.rulebook.Rulebook");

goog.require("z.rulebook.projects.SpikedPit");

z.rulebook.Rulebook = function () {
};

z.rulebook.Rulebook.prototype.possibleActions = function (entity, instance) {
  var actions = [];
  if (entity === 'Tile' && instance.terrain === "grass") {
     actions.push(new z.rulebook.projects.SpikedPit());
  }
  return actions;
};