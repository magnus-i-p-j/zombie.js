TestCase('test ContextMenuFacet', {
  'test that context is populated as expected':function (){
    var gem = {
      map : {
        getTile :  function(){
          return {
            terrain : 'grass'
          }
        }
      },
      evr:{
        subscribe : function(){}
      },
      rulebook: new z.rulebook.Rulebook()
    }; //Mock it?
    var contextMenuFacet = new z.facet.ContextMenuFacet(gem);
    var tileFacet = new z.facet.TileFacet(gem);
    contextMenuFacet.showContextMenuCallback(
        new z.client.events.ShowContextMenuEvent({},[tileFacet],{}));
    assertTrue(contextMenuFacet.actions()[0].category === 'improvement');
    assertTrue(contextMenuFacet.actions()[0].title === 'A spiked pit.');
  }
});

