TestCase("test mugd.editor.Link", {
  setUp: function () {
    var href = 'game://terrain/{type}';
    var model = {
      value: ko.observable()
    };
    model.value(
        {
          type: {
            value: ko.observable('grass')
          }
        }
    );
    this.href = href;
    this.model = model;
    this.link = new mugd.editor.Link(href);
    this.link.model(this.model);
  },
  'test uri updates when model changes': function () {

    assertSame('game://terrain/grass', this.link.uri());

    this.link.model().value()['type'].value('water');
    assertSame('game://terrain/water', this.link.uri());
  },
  'test model changed when updating uri': function () {

    this.link.uri('game://terrain/water');

    var actual = this.link.model().value()['type'].value();

    assertSame('water', actual);
  },
  'test model changed when updating uri containing @': function () {

    this.link.uri('game://terrain/water');

    var actual = this.link.model().value()['type'].value();

    assertSame('water', actual);
  },
  'test exception when uri cannot be parsed': function () {
    var link = this.link;
    assertException(function () {
      link.uri('game://terrain/');
    }, 'CannotParseUri');
    assertException(function () {
      link.uri('game://project/grass');
    }, 'CannotParseUri');
  }
});

TestCase("test mugd.editor.Link @ href", {
  setUp: function () {
    var href = 'game://terrain/{@}';
    var model = {
      value: ko.observable('grass')
    };
    this.href = href;
    this.model = model;
    this.link = new mugd.editor.Link(href);
    this.link.model(this.model);
  },
  'test uri updates when model changes': function () {
    assertSame('game://terrain/grass', this.link.uri());

    this.model.value('water');
    assertSame('game://terrain/water', this.link.uri());
  },
  'test model changed when updating uri': function () {

    this.link.uri('game://terrain/water');

    var actual = this.model.value();

    assertSame('water', actual);
  },
  'test exception when uri cannot be parsed': function () {
    var link = this.link;
    assertException(function () {
      link.uri('game://terrain/');
    }, 'CannotParseUri');
    assertException(function () {
      link.uri('game://project/grass');
    }, 'CannotParseUri');
  },
  'test should be able to parse uris containing @': function(){
    assertSame('game://terrain/grass', this.link.uri());
  }
});
