TestCase( 'test TrivialMap', {
    'test TrivialMap exists': function () {
        assertFunction( z.engine.TrivialMap );
    },
    'test has methof getTiles': function () {
        var map = new z.engine.TrivialMap();

        assertFunction( map.getTiles );
    }

});