TestCase( 'test Grid', {
    'setUp' : function(){
        this.grid = new z.util.Grid();
    },
    'tearDown' : function(){
        delete this.grid;
    },
    'test setting and getting a Node': function(){
        var nodeIn = new z.util.Node();
        var x = 125,
            y = -12;

        this.grid.setNode(x, y, nodeIn);
        var nodeOut = this.grid.getNode(x, y);

        assertSame(nodeIn, nodeOut);
        assertEquals(x, nodeOut.x);
        assertEquals(y, nodeOut.y);
    }
});
