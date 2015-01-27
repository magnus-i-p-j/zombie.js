goog.provide('z.common.rulebook.GameStartingData');

goog.require('z.common.rulebook');
goog.require('goog.array');
/**
 * @param {Object} ruleset
 * @constructor
 */
z.common.rulebook.GameStartingData = function (ruleset) {
  this.startingResources = {};

  var bounds = ruleset[z.common.rulebook.category.BOUNDS];
  var startingResource = bounds[z.common.rulebook.bounds.STARTING_RESOURCES];
  goog.array.forEach(startingResource, function (resource) {
    this.startingResources[resource['type']] = resource['amount'];
  }, this);
};