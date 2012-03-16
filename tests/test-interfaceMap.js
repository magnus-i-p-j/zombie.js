var interfaceMap = function ( cls ) {
    var TestMap = z.engine[cls];
    var t = {
        'test has method getTiles': function () {
            var map = new TestMap();

            assertFunction( map.getTiles );
        },
        'test has method getTile': function () {
            var map = new TestMap();

            assertFunction( map.getTile );
        },

        'test getTile returns a tile': function () {
            var map = new TestMap();

            var tile = map.getTile( 0, 0 );

            assertString( tile.terrain );
        },

        'test getTile updates data': function () {
            var map = new TestMap();
            map.feed( [
                { x: 1, y: 2, terrain: 'grass' }
            ] );

            var actual = map.getTile( 1, 2 );

            assertEquals( 'grass', actual.terrain );
        }
    };

    t['test ' + cls + 'exists'] = function () {
        assertFunction( TestMap );
    };

    TestCase( 'test ' + cls, t );
};

interfaceMap( 'TrivialMap' );
