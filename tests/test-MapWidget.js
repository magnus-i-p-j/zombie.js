TestCase("test MapWidget", {
  setUp:function () {
    this.mw = new z.widget.MapWidget();
  },
  'test exists':function () {
    assertFunction(z.widget.MapWidget);
  },
  'test has template data':function () {
    assertString(this.mw.template);
  },
  'test claims target id':function () {
    /*:DOC += <div id="foo">This should be replaced.</div> */

    this.mw.claim('foo');

    var targetElement = document.getElementById('foo');
    var actual = targetElement.innerHTML;
    assertFalse('This should be replaced.' === actual);
  }
});
