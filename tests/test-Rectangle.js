TestCase('test Rectangle',{

    'test empty constructor exists' : function(){
        z.util.Rectangle();
    }
    ,
    'test empty constructor intitializes top, right, bottom, left' : function(){
        var rect = new z.util.Rectangle();
        assertNotUndefined(rect.top);
        assertNotUndefined(rect.right);
        assertNotUndefined(rect.bottom);
        assertNotUndefined(rect.left);
    }
    ,
    'test constructor exists' : function(){
        var top = 10,
            right = 10,
            bottom = -10,
            left = -10;
        z.util.Rectangle(top, right, bottom, left);
    }
    ,
    'test constructor raises exception when all in positive space' : function(){
        var top = 10,
            right = 10,
            bottom = 20,
            left = 10;
        assertException(
            function () {
                new z.util.Rectangle(top, right, bottom, left);
            }, 'Invalid geometry' );
    }
    ,
    'test constructor raises exception when all in negative space' : function(){
        var top = -10,
            right = -25,
            bottom = -20,
            left = -15;
        assertException(
            function () {
                new z.util.Rectangle(top, right, bottom, left);
            }, 'Invalid geometry' );
    },
    'test constructor raises exception when in mixed space' : function(){
        var top = 10,
            right = -25,
            bottom = -20,
            left = -15;
        assertException(
            function () {
                new z.util.Rectangle(top, right, bottom, left);
            }, 'Invalid geometry' );
    }
});
