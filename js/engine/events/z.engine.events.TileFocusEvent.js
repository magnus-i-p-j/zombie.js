goog.provide('z.engine.events.TileFocusEvent');

goog.require('z.util.Event');

z.engine.events.TileFocusEvent = new Class({

  Extends:z.util.Event,

  initialize:function (source, tile) {
    this.parent(source, {});
    this.data.tile = tile;
  }

});

