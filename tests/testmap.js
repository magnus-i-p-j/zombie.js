TestCase( 'test map', {
    'test Map exists' : function () {
        assertFunction( 'z.Map does not exist',  z.Map );
    },
   'test Map has method getTile': function () {
       map = new z.Map();

       assertFunction( map.getTile );
   }

});