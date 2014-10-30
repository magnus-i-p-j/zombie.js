goog.provide('z');

goog.require('z.client.Client');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
goog.require('mugd.bindings.dragndrop');

/**
 * @param {string} initElement
 * @return {z.client.Client}
 */
z.init = function (initElement) {
  mugd.bindings.dragndrop.addDragNDrop();

  var client = new z.client.Client(initElement);

  goog.net.XhrIo.send('all.html', function (e) {
    var xhr = /** @type {goog.net.XhrIo} */ (e.target);
    if (xhr.isSuccess()) {
      var html = xhr.getResponseText();
      var targetElement = goog.dom.getElement(initElement);
      targetElement.innerHTML = html;
    } else {
      infuser['defaults']['templatePrefix'] = 'tpl/';
    }
    console.log('running');
    client.run();
  });
  return client;
};

goog.exportSymbol('zed.init', z.init);

if (window['triggerZed']) {
  window['triggerZed']();
  window['triggerZed'] = false;
}
