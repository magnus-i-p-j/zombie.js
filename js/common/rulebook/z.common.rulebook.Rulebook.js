goog.provide("z.common.rulebook.Rulebook");

goog.require("z.common.rulebook");
goog.require("z.common.rulebook.Improvement");

goog.require('mugd.Injector');
goog.require('z.client');


z.common.rulebook.Rulebook = function (ruleset) {
  this.improvements = goog.array.map(ruleset[z.common.rulebook.category.IMPROVEMENT], function(item){
    return new z.common.rulebook.Improvement(item);
  });
};

z.common.rulebook.Rulebook.prototype[mugd.Injector.DEPS] = [
  z.client.Resources.RULESET
];