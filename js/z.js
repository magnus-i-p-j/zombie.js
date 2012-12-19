goog.provide('z');

goog.require('z.client.Client');

/**
 * @param {string} initElement
 * @return {z.client.Client}
 */
z.init = function (initElement) {
  infuser.defaults.templatePrefix = 'tpl/';

  var client = new z.client.Client(initElement);
  client.run();
  return client;
};
//goog.exportSymbol('z', z);
//goog.exportSymbol('z.init', z.init);
//goog.exportProperty(z, 'init', z.init);

