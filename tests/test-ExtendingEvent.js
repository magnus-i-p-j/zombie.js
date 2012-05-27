TestCase('test extending Event', {
        'test TileFocusEvent exists':function () {
            assertFunction(z.engine.events.TileFocusEvent);
        },
        'test TileFocusEvent extends Event': function(){
            var tileFocusEvent = new z.engine.events.TileFocusEvent(null, null);
            assert('TileFocusEvent does not extend Event properly',
                instanceOf(tileFocusEvent, z.util.Event));
        }
    }
);