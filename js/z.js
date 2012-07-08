goog.provide('z');

goog.require('z.client.Client');

z.init = function (initElement) {
  var client = new z.client.Client(initElement);
  client.run();
  return client;
};

