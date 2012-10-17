goog.provide('z.facet.ActionFactory');

z.facet.ActionFactory = function () {
  this._actionCache = new {};
};

z.facet.ActionFactory.prototype.CreateAction = function(specification){
  var action;
  if(this._isCached(specification)){
    action = this._get(specification);
  }else{
    this._set(specification);
    action = this._get(specification);
  }
  return action;
};

z.facet.ActionFactory.prototype._isCached = function(specification){
  return this._actionCache[specification.category][specification.title];
};

z.facet.ActionFactory.prototype._get = function(specification){
  return this._actionCache[specification.category][specification.title];
};

z.facet.ActionFactory.prototype._set = function(specification){
  var action;
  if(specification.category === "improvement"){
    //Do some DI if more parameters are needed, but this will do for now.
    action = new z.client.actions.ImprovementAction(specification);
  }
  if(action){
    this._actionCache[specification.category][specification.title] = action;
  }
};