TestCase('test Node', {
    'test node has property x' : function(){
        var node = new z.util.Node();
        assertNotUndefined(node.x);
    },
    'test node has property y' : function(){
        var node = new z.util.Node();
        assertNotUndefined(node.y);
    }
});