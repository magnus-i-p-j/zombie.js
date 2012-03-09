TestCase( 'test TrivialMap', {
    // interface tests
    'test TrivialMap exists': function () {
        assertFunction( z.engine.TrivialMap );
    },
    'test has method getTiles': function () {
        var map = new z.engine.TrivialMap();

        assertFunction( map.getTiles );
    },
    'test has method getTile': function () {
        var map = new z.engine.TrivialMap();

        assertFunction( map.getTile );
    },



    'test getTile returns a tile': function () {
        var map = new z.engine.TrivialMap();

        var tile = map.getTile( 0, 0 );

        assertString( tile.terrain );
    }


});