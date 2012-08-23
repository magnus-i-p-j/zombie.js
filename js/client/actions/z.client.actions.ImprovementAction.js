goog.provide('z.client.actions.ConstructImprovement');

goog.require('z.client.actions.Action');
goog.require('z.client.actions.ActionResult');

z.client.actions.ConstructImprovement = function(improvement){
  z.actions.Action.call(this, improvement);
};

z.client.actions.ConstructImprovement.prototype = new z.actions.Action();

z.client.actions.ConstructImprovement.prototype.execute = function(source){
  var result = z.actions.ActionResult(this);
  result.source = source;

  //Here we can gather all extra information needed, open additional ui:s etc.
  var target = source;
  result.target = target;



  source.acceptResult(source);
  target.acceptResult(this.improvement);
  //And result could be something more...
  return result;
};


