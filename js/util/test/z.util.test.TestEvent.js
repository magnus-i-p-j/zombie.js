"use strict";
goog.provide('z.util.test.TestEvent');

//goog.require('z.util.Event');

z.util.test.TestEvent = function (source, data) {
  this.source = source || null;
  this.data = data || {};
};
z.util.test.TestEvent.topic = 'TestEvent';