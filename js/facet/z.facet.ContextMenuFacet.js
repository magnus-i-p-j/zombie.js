goog.provide('z.facet.ContextMenuFacet');
goog.require('goog');
goog.require('z.entities.Tile');
goog.require('z.rulebook.Rulebook');
//Wildcard for require?
goog.require("z.rulebook.projects.SpikedPit");

z.facet.ContextMenuFacet = function(evr, rulebook){
    this.hide();
    this.projects = ko.observableArray();
    this.registerContextHandlers();
    evr.subscribe(z.client.events.ShowContextMenuEvent, goog.bind(this.showContextMenuCallback, this));
};

z.facet.ContextMenuFacet.prototype.showContextMenuCallback = function(showContextMenuEvent){
    var event = showContextMenuEvent;

    var ctx = event.data.context;
    this.visitor.tryVisit(ctx);

    Show(event.position);
};

z.facet.ContextMenuFacet.prototype.registerContextHandlers = function() {
    this.visitor = new z.util.ContextVisitor();
    z.util.ContextVisitor.addVisitHandler(this.visitor, z.entities.Tile, 'Tile', this.getTileActions);
}

z.facet.ContextMenuFacet.prototype.getTileActions = function(tile){
  var actions = [];
  var projects = rulebook.PossibleProjects(tile.terrain);
  if(projects.length > 0){
    console.log(projects[0]);
    //Create contextmenuitems.
    //Should probably have some categories to group them by.
  }
};

z.facet.ContextMenuFacet.prototype.Show = function(position){
    this.position = position;
    this.show = true;
}

z.facet.ContextMenuFacet.prototype.Hide = function(){
    this.show = false;
    this.position = null;
}

//Visitor
z.util.ContextVisitor = function(){
};

z.util.ContextVisitor.prototype.tryVisit = function(visitee){
    if(visitee['acceptVisitor']){
        visitee.acceptVisitor(this);
    }
}

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