goog.provide('z.facet.ContextMenuFacet');
goog.require('goog');
goog.require('z.entities.Tile');
goog.require('z.rulebook.Rulebook');
//Wildcard for require?
goog.require("z.rulebook.projects.SpikedPit");

z.facet.ContextMenuFacet = function(evr, rulebook){
    this.visible = ko.observable(false);
    this.projects = ko.observableArray();
    this.rulebook = rulebook;
    this.registerContextHandlers();
    evr.subscribe(z.client.events.ShowContextMenuEvent, goog.bind(this.showContextMenuCallback, this));
};

z.facet.ContextMenuFacet.prototype.showContextMenuCallback = function(showContextMenuEvent){
    var ctx = showContextMenuEvent.data.context;
    this.visitor.tryVisit(ctx);
    if(ctx)
    this._show(showContextMenuEvent.position);
};

z.facet.ContextMenuFacet.prototype.registerContextHandlers = function() {
    this.visitor = new z.util.ContextVisitor();
    z.util.ContextVisitor.addVisitHandler(this.visitor, z.entities.Tile, 'Tile', this.getTileActions);
};

z.facet.ContextMenuFacet.prototype.getTileActions = function(tile){
  var actions = [];
  var projects = this.rulebook.PossibleProjects(tile.terrain);
  if(projects.length > 0){
    console.log(projects[0]);
    //Create contextmenuitems.
    //Should probably have some categories to group them by.
  }
};

z.facet.ContextMenuFacet.prototype._show = function(position){
    this.position = position;
    this.visible = true;
};

z.facet.ContextMenuFacet.prototype._hide = function(){
    this.show = false;
    this.position = null;
};

//Visitor
z.util.ContextVisitor = function(){
};

z.util.ContextVisitor.prototype.tryVisit = function(visitee){
    if(visitee['acceptVisitor']){
        visitee.acceptVisitor(this);
    }
};

z.util.ContextVisitor.addVisitHandler = function(visitor, visitee, name, handler){
    z.util.ContextVisitor.addAcceptor(visitor, visitee, name);
    z.util.ContextVisitor.addVisit(visitor, name, handler);
};

z.util.ContextVisitor.addAcceptor = function(visitor, visitee, name){
    if(!visitee.hasOwnProperty('acceptVisitor')){
        visitee.prototype['acceptVisitor'] = function(visitor){
            visitor['__visit_' + name](this);
        }
    }
};

z.util.ContextVisitor.addVisit = function(visitor, name, handler){
    visitor['__visit_' + name] = handler;
};