"use strict";

goog.provide('z.util.test');

z.util.test.testInterface = function (namespace, interfaceTest, classes) {
  classes = classes || Object.keys(namespace);
  for (var cls in classes) {
    if (classes.hasOwnProperty(cls)) {
      interfaceTest(namespace, classes[cls]);
    }
  }
};

