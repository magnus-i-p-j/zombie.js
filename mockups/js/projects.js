var getId = (function () {
  var i = 5;

  function inner() {
    i++;
    return 'id/' + i;
  }

  return inner;
})();

(function () {
  function Person(name) {
    this.name = ko.observable(name);
    this.img = ko.observable('/mockups/img/' + name + '.jpg');
    this.job = ko.observable(false);
    this.id = getId();
  }

  function Project(name) {
    this.name = ko.observable(name);
    this.id = getId();
  }

  function MainViewModel() {
    var self = this;

    self.resources = ko.observableArray();
    self.p1 = new Project('Build spiked pit');
    self.p2 = new Project('Scrounge for metal');

    var bette = new Person('bette');
    var christina = new Person('christina');
    var christopher = new Person('christopher');
    var john = new Person('john');


    self.resources.push(bette);
    self.resources.push(christina);
    self.resources.push(christopher);
    self.resources.push(john);
    self.resources.push(new Person('mike'));
    self.resources.push(new Person('scarlett'));
    self.resources.push(new Person('steve'));

    christina.job(self.p1.id);
    john.job(self.p1.id);
    christopher.job(self.p2.id);
  }

  ko.applyBindings(new MainViewModel());
})();