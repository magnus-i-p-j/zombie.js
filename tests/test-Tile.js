TestCase( 'test Tile', {
    'test TrivialMap exists': function () {
        assertFunction( z.engine.Tile );
    },

    'test Tile sets terrain to constuctor parameter': function () {
        var tile1 = new z.engine.Tile({ 'terrain': 'grass' });
        var tile2 = new z.engine.Tile({ 'terrain': 'ocean' });

        assertEquals( 'grass', tile1.terrain );
        assertEquals( 'ocean', tile2.terrain );

    },
    'test non css terrain type throws exeption': function () {
        assertException(
            function () {
                new z.engine.Tile({terrain: 'this is not a css class'});
            }, 'Not a css class' );
    }
});