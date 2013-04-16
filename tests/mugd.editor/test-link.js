TestCase("test mugd.editor.Link", {
  'test uri updates when model changes': function () {
    var href = 'game://terrain/{type}';
    var model = {
      type: ko.observable('grass')
    };

    var link = new mugd.editor.Linker(href);

    console.log(link.uri());

    link.model(model);
    assertSame('game://terrain/grass', link.uri());
    link.model().type('water');
    assertSame('game://terrain/water', link.uri());
  }
});
