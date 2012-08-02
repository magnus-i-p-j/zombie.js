goog.provide('z.facet.ContextMenuFacet');
goog.require('goog');
goog.require('z.entities.Tile');

z.facet.ContextMenuFacet = function(evr){
    this.registerContextHandlers();
    evr.subscribe(z.client.events.ShowContextMenuEvent, goog.bind(this.showContextMenuCallback, this));
};

z.facet.ContextMenuFacet.prototype.showContextMenuCallback = function(showContextMenuEvent){
    var event = showContextMenuEvent;

    var ctx = event.data.context;
    this.visitor.tryVisit(ctx);
};

z.facet.ContextMenuFacet.prototype.registerContextHandlers = function() {
    this.visitor = new z.util.ContextVisitor();
    z.util.ContextVisitor.addVisitHandler(this.visitor, z.entities.Tile, 'Tile', this.getTileActions);
}

z.facet.ContextMenuFacet.prototype.getTileActions = function(tile){
  var actions = [];
  if(tile.terrain === 'grass'){
      console.log("grass");
  }
};


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