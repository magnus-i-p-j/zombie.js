goog.provide('z');

goog.require('z.client.Client');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.DomHelper');

/**
 * @param {string} initElement
 * @return {z.client.Client}
 */
z.init = function (initElement) {

  var client = new z.client.Client(initElement);

  goog.net.XhrIo.send('tpl.html', function (e) {
    var xhr = /** @type {goog.net.XhrIo} */ (e.target);
    if(xhr.isSuccess()){
      var tpl = xhr.getResponseText();
      var domHelper = new goog.dom.DomHelper();
      var parent = domHelper.getElement(initElement);
      var firstChild = domHelper.getFirstElementChild(parent);
      var siblings = domHelper.htmlToDocumentFragment(tpl);
      domHelper.insertSiblingBefore(siblings, firstChild);
    }else{
      infuser['defaults']['templatePrefix'] = 'tpl/';
    }
    client.run();
  });

  return client;
};

goog.exportSymbol('zed.init', z.init);

