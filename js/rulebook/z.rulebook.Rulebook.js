goog.provide("z.rulebook.Rulebook");

goog.require("z.rulebook.improvements");

z.rulebook.Rulebook = function (ruleset) {
  this.improvements = goog.array.map(ruleset[z.rulebook.category.IMPROVEMENT], function(item){
    return new z.rulebook.Improvement(item);
  });
};

