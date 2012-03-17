TestCase('test StaticWorld', {
    'test StaticWorld exists': function () {
        assertFunction(z.engine.StaticWorld);
    },
    setUp: function () {
        this.world = new z.engine.StaticWorld('ggg');
    },
    'test getData returns a iterable': function () {

        var data = this.world.getData();

        assertFunction(data.each);
    },
    'test parseSourceItem is a function': function () {
        assertFunction(this.world.parseSourceItem);
    },
    'test StaticWorld calls parseSourceItem for each character in source': function () {
        var source = 'gwwwggwgwggwggwggwgwgwwg';
        var world = new z.engine.StaticWorld(source);
        var nCalls = 0;
        world.parseSourceItem = function () {
            nCalls += 1;
        };

        world.getData();

        assertTrue('source.length === nCalls', source.length === nCalls);
    },
    'test parseSourceItem returns terrain data from terrainLookup': function () {
        this.world.terrainLookup = {
            q: 'qwe',
            w: 'up',
            e: 'use'
        };

        assertEquals(this.world.terrainLookup.q, this.world.parseSourceItem('q', 0).terrain);
        assertEquals(this.world.terrainLookup.w, this.world.parseSourceItem('w', 0).terrain);
        assertEquals(this.world.terrainLookup.e, this.world.parseSourceItem('e', 0).terrain);
    },
    'test parseSourceItem returns unknown when data is missing in terrainLookup': function () {
        this.world.terrainLookup = {};

        assertEquals('unknown', this.world.parseSourceItem('q', 0).terrain);
    }


});

