goog.provide('z');

goog.require('z.client.Client');

/**
 * @param {string} initElement
 * @param {string} templates
 * @return {z.client.Client}
 */
z.init = function (initElement, templates) {
  infuser['defaults']['templatePrefix'] = templates || 'tpl/';

  var client = new z.client.Client(initElement);
  client.run();
  return client;
};

goog.exportSymbol('zed.init', z.init);

