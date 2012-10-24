goog.provide("z.rulebook.Rulebook");

goog.require("z.rulebook.improvements");

z.rulebook.Rulebook = function (ruleset) {
  this.initMeta();
};

z.rulebook.Rulebook.prototype.getActionSpecifications = function (entity) {
  var actions = {};
  actions['improvements'] =
      goog.array.filter(z.rulebook.improvements, this.checkPrerequisites(entity));
  return actions;
};

z.rulebook.Rulebook.prototype.checkPrerequisites = function (entity) {
  return function (action) {
    var applicable = false;
    if (action.prerequisites.hasOwnProperty('entity')) {
      applicable = action.prerequisites.entity === entity;
    }
    return applicable;
  }
};

z.rulebook.Rulebook.prototype.getMeta = function (metaType) {
  return this.metaDict[metaType];
};

z.rulebook.Rulebook.prototype.initMeta = function () {
  /**
   * @type {Object.<string, z.rulebook.meta>}
   */
  this.metaDict = {
    'grass':{
      'category':z.rulebook.category.TERRAIN,
      'name':'Grass',
      'description':'A patch of green grass, untouched by the zombie apocalypse.'
    },
    'water':{
      'category':z.rulebook.category.TERRAIN,
      'name':'Water',
      'description':'A patch of blue water, untouched by the zombie apocalypse.'
    },
    'hills':{
      'category':z.rulebook.category.TERRAIN,
      'name':'Hills',
      'description':'A patch of high hill, untouched by the zombie apocalypse.'
    },
    'spiked_pit':{
      'category':z.rulebook.category.TERRAIN,
      'name':'Spiked pit',
      'description':'A patch of green grass, some asshole has dug a pit filled with spikes here.'
    },
    'spiked_pit_improvement':{
      'category':z.rulebook.category.IMPROVEMENT,
      'name':'Spiked pit',
      'description':'A patch of green grass, some asshole is digging a pit filled with spikes here.'
    }
  };
  for (var i in this.metaDict) {
    if (this.metaDict.hasOwnProperty(i)) {
      this.metaDict[i]['type'] = i;
    }
  }
};

z.rulebook.Rulebook.prototype.initImprovements = function () {
  this.metaDict = {
    'spiked_pit_improvement':function () {
    }
  };
  for (var i in this.metaDict) {
    if (this.metaDict.hasOwnProperty(i)) {
      this.metaDict[i]['type'] = i;
    }
  }
};
