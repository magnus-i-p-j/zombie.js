goog.provide('z');

goog.require('z.client.Client');

/**
 * @param {string} initElement
 * @return {z.client.Client}
 */
z.init = function (initElement) {
  infuser['defaults']['templatePrefix'] = 'tpl/';

  var client = new z.client.Client(initElement);
  client.run();
  return client;
};

goog.exportSymbol('zed.init', z.init);

