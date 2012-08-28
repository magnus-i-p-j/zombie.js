goog.provide('z.client.actions.ConstructImprovement');

goog.require('z.client.actions.Action');
goog.require('z.client.actions.ActionResult');

z.client.actions.ConstructImprovement = function(improvement){
  goog.base(this, improvement);
};
goog.inherits(z.client.actions.ConstructImprovement, z.client.actions.Action);

z.client.actions.ConstructImprovement.prototype.execute = function(source){
  var result = z.actions.ActionResult(this);
  result.source = source;

  //Here we can gather all extra information needed, open additional ui:s etc.
  //Or should this be done somewhere else... How do we decide on the target in other instances?
  var target = source;
  result.target = source;



  source.acceptResult(result);
  target.acceptResult(result);

  //And result could be something more...
  return result;
};


