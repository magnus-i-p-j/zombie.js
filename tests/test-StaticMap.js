TestCase('test StaticWorld', {
    'test StaticWorld exists': function () {
        assertFunction(z.engine.StaticWorld);
    },
    setUp: function () {
        this.world = new z.engine.StaticWorld('ggg', 0, 0);
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
        var world = new z.engine.StaticWorld(source, 0, 0);
        var nCalls = 0;
        world.parseSourceItem = function () {
            nCalls += 1;
            return {};
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

        assertEquals(this.world.terrainLookup.q, this.world.parseSourceItem('q').terrain);
        assertEquals(this.world.terrainLookup.w, this.world.parseSourceItem('w').terrain);
        assertEquals(this.world.terrainLookup.e, this.world.parseSourceItem('e').terrain);
    },
    'test parseSourceItem returns unknown when data is missing in terrainLookup': function () {
        this.world.terrainLookup = {};

        assertEquals('unknown', this.world.parseSourceItem('q').terrain);
    },
    'test data includes c and r': function () {
        var data = this.world.getData();

        data.each(function (item) {
            assertNumber(item.c);
            assertNumber(item.r);
        });
    },
    'test generates c and r correctly': function () {
        var source = 'oooo\n' +
            'oooo\n' +
            'ooot\n' +
            'oooo';
        var world = new z.engine.StaticWorld(source, 0, 0);
        world.terrainLookup = {
            t: 'test',
            o: 'other'
        };

        var data = world.getData();

        var found = false;
        data.each(function (item) {
            if ( item.terrain === 'test' ) {
                assertNumber('c is number', item.c);
                assertEquals('c is correct', 3, item.c);
                assertNumber('r is number', item.r);
                assertEquals('r is correct', 2, item.r);
                found = true;
            }
        });
        assertTrue(found);
    }


});

