"use strict";

goog.provide('z');

goog.require('z.util.EventRouter');
goog.require('z.engine.World');
goog.require('z.User');

z.init = function (initElement) {

  var user = new z.User();

  // nytt spel !
  var world = new z.engine.World();
  var eventRouter = new z.engine.EventRouter();
};