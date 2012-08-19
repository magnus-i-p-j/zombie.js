goog.provide("z.rulebook.Rulebook");

goog.require("z.rulebook.projects.SpikedPit");

z.rulebook.Rulebook = function () {
};

z.rulebook.Rulebook.prototype.possibleActions = function (entity, instance) {

  if (entity === 'Tile' && instance.terrain === "grass") {
    return new z.rulebook.projects.SpikedPit();
  }
};