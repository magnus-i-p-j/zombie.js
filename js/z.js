goog.provide('z');

goog.require('z.client.Client');

z.init = function (initElement) {
  (new z.client.Client(initElement)).run();
};

