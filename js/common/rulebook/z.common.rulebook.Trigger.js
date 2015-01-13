goog.provide('z.common.rulebook.Trigger');

/**
 * @param trigger {z.common.rulebook.trigger}
 * @constructor
 */
z.common.rulebook.Trigger = function(trigger) {
  this._effects = trigger.effects;
  var triggerType = trigger['predicate']['type'];
  this._predicateConfig = trigger['predicate'];
  this._predicate = z.common.rulebook.logic.predicates[triggerType];
};

/**
 * @param triggerArgs {z.common.rulebook.trigger_args}
 */
z.common.rulebook.Trigger.prototype.test = function(triggerArgs) {
  return this._predicate(triggerArgs, this._predicateConfig);
};

/**
 * @return {Array.<Object>}
 */
z.common.rulebook.Trigger.prototype.effects = function() {
  var effects = [];
  goog.object.forEach(
    this._effects,
    function(effect, key) {
      var tmp = {};
      tmp['type'] = key;
      tmp['args'] = goog.object.unsafeClone(effect);
      effects.push(tmp);
    },
    this
  );
  return effects;
};

