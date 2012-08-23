goog.provide('z.client.action.Action');

goog.require('goog.array');

z.client.actions.Action = function(specification){
  this.specification = specification;
  this.category = specification.category;
  this.title = specification.title;
  this.description = specification.description;
  this.resources = specification.resources;
  this.labour = specification.labour;
};

z.client.action.Action.prototype.canExecute = function(instance){
  var canExecute = true;
  var conditions = this.specification.prerequisites.conditions;
  for(var condition in conditions){
    if(canExecute && conditions.hasOwnProperty(condition)){
      if(this.instance.hasOwnProperty(condition)){
        canExecute = conditions[condition] === instance[condition];
      }
      else{
        canExecute = false;
      }
    }
  }
};