goog.provide('z.util.Event');

z.util.Event = new Class({

  initialize:function (source, data) {
    this.source = source || null;
    this.data = data || {};
  }

});