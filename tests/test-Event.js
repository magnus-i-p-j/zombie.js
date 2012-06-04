function createEventInterfaceTest(namespace, name) {
    TestCase('test ' + name , {
        'setUp': function() {
            this.ctor = namespace[name];
        },
        'test it exists':function () {
            assertFunction(this.ctor);
        },

        'test it records source':function () {
            var src = {};
            var e = new this.ctor(src);

            assert('No source found', src === e.source);
        },
        'test it records data':function () {
            var data = {};
            var e = new this.ctor({}, data);

            assert('No data found', !!data);
        },
        'test that it with no source has null source':function () {
            var e = new this.ctor();

            assertNull('Source was not null', e.source);
        },
        'test that it with no data has {} data':function () {
            var e = new this.ctor();

            assertObject('Data was not an object', e.data);
        }
    })
}

z.util.test.testInterface(z.util, createEventInterfaceTest, ['Event']);
z.util.test.testInterface(z.engine.events, createEventInterfaceTest);
