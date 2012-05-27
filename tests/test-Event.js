TestCase('test Event', {
    'test Event exists':function () {
        assertFunction(z.util.Event);
    },

    'test Event records source':function () {
        var src = {};
        var e = new z.util.Event(src);

        assert('No source found', src === e.source);
    },
    'test Event records data':function () {
        var data = {};
        var e = new z.util.Event({}, data);

        assert('No data found', data === e.data);
    },
    'test Event with no source has null source':function () {
        var e = new z.util.Event();

        assertNull('Source was not null', e.source);
    },
    'test Event with no data has {} data':function () {
        var e = new z.util.Event();

        assertObject('Data was not an object', e.data);
    }
});