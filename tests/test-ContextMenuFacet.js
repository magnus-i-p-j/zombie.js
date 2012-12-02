TestCase('test ContextMenuFacet', {
  'test that context is populated as expected':function (){
    var gem = {
      map : {
        getTileFacet :  function(){
          return {
            terrain : 'grass'
          }
        }
      },
      evr:{
        subscribe : function(){}
      },
      rulebook: new z.common.rulebook.Rulebook()
    }; //Mock it?
    var contextMenuFacet = new z.client.facet.ContextMenuFacet(gem);
    var tileFacet = new z.client.facet.TileFacet(gem);
    contextMenuFacet.showContextMenuCallback(
        new z.client.events.ShowContextMenuEvent({},[tileFacet],{}));
    assertTrue(contextMenuFacet.actions()[0].category === 'improvement');
    assertTrue(contextMenuFacet.actions()[0].title === 'A spiked pit.');
  }
});

