TestCase('test Grid', {
    'setUp': function () {
        this.grid = new z.util.Grid();
    },
    'tearDown': function () {
        delete this.grid;
    },
    'test setting and getting a Node': function () {
        var nodeIn = new z.util.Node();
        var x = 125,
            y = -12;

        this.grid.setNode(x, y, nodeIn);
        var nodeOut = this.grid.getNode(x, y);

        assertSame(nodeIn, nodeOut);
        assertEquals(x, nodeOut.c);
        assertEquals(y, nodeOut.r);
    },

    'test getting adjacent nodes': function () {
        for ( var i = -10; i < 10; ++i ) {
            for ( var j = -10; j < 10; ++j ) {
                var node = new z.util.Node();
                this.grid.setNode(i, j, node);
            }
        }

        var x = 3,
            y = 3;
        var origin = this.grid.getNode(x, y);

        var actualAdjacent = this.grid.getAdjacent(origin);
        var exceptedAdjacent =
            [this.grid.getNode(x - 1, y + 1), this.grid.getNode(x, y + 1),
                this.grid.getNode(x + 1, y),
                this.grid.getNode(x + 1, y - 1), this.grid.getNode(x, y - 1),
                this.grid.getNode(x - 1, y)];

        assertEquals(exceptedAdjacent, actualAdjacent);
    }

});
