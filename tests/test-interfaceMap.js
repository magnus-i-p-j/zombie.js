var interfaceMap = function ( cls ) {
    var t = {};
    t['test ' + cls + 'exists'] = function () {
        assertFunction( z.engine[cls] );
    };

    t['test has method getTiles'] = function () {
        var map = new z.engine[cls]();

        assertFunction( map.getTiles );
    };

    t['test has method getTile'] = function () {
        var map = new z.engine[cls]();

        assertFunction( map.getTile );
    };


    t['test getTile returns a tile'] = function () {
        var map = new z.engine[cls]();

        var tile = map.getTile( 0, 0 );

        assertString( tile.terrain );
    };

    t['test getTile updates data'] = function () {
        var map = new z.engine[cls]();
        map.feed( [
            { x: 1, y: 2, terrain: 'grass' }
        ] );

        var actual = map.getTile( 1, 2 );

        assertEquals( 'grass', actual.terrain );
    };

    TestCase( 'test ' + cls, t );
};

interfaceMap( 'TrivialMap' );

