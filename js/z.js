goog.provide('z');

z.init = function (initElement) {
  (new z.client.Client(initElement)).run();
};

