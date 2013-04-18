TestCase("test mugd.editor.Link", {
  'test uri updates when model changes': function () {
    var href = 'game://terrain/{type}';
    var model = {
      value : ko.observable()
    };
    model.value({
      type : ko.observable()
    });
    model.value(
        {type: { value: ko.observable('grass')}
    });

    var link = new mugd.editor.Link(href);

    link.model(model);
    assertSame('game://terrain/grass', link.uri());
    link.model().value()['type'].value('water');
    assertSame('game://terrain/water', link.uri());
  }
});
