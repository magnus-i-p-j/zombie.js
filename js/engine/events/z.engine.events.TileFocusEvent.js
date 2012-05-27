var z = z || {};
z.engine = z.engine || {};
z.engine.events = z.engine.events || {};

z.engine.events.TileFocusEvent = new Class({

    Extends:z.util.Event,

    initialize: function(source, tile){
        this.source = source;

        if(!tile instanceof z.engine.Tile){
            throw { name: "data is not a tile."};
        }
        this.data = tile;
    }
});

