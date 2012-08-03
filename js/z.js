goog.provide('z');

goog.require('z.client.Client');

z.init = function (initElement) {
  infuser.defaults.templatePrefix = 'tpl/';

  var client = new z.client.Client(initElement);
  client.run();
  return client;
};

