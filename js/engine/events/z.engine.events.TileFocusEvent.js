var z = z || {};
z.engine = z.engine || {};
z.engine.events = z.engine.events || {};

z.engine.events.TileFocusEvent = new Class({

    Extends:z.util.Event,

    initialize: function(source, tile){
        this.parent(source, {});
        this.data.tile = tile;
    }

});

