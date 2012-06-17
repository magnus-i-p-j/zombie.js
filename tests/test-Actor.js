var createActorInterfaceTest = function (namespace, name) {
  var testObject = {
    setUp:function () {
      this.ctor = namespace[name];
    }
  };
  testObject['test ' + name + ' exists'] = function () {
    assertFunction(this.ctor);
  };
  testObject['test has guid'] = function () {
    var inGuid = 'ioqeryg89werg';
    var a = new this.ctor(inGuid);

    assert(a.guid === inGuid);
  };
  testObject['test name property'] = function () {
    var inName = 'Egon';
    var a = new this.ctor('eg9werhty89');

    assertNull(a.name);

    a.name = inName;

    assert(a.name === inName);
  };
  testObject['test has worldState'] = function () {
    var a = new this.ctor('eg9werhty89');

    assertFunction(a.worldState);
  };

  TestCase("test " + name, testObject);
};

z.util.test.testInterface(z.entities, createActorInterfaceTest, ['Actor']);