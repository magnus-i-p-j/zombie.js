var z = z || {};
z.engine = z.engine || {};

z.engine.StaticWorld = function (source) {
    this.source = source;
};

z.engine.StaticWorld.prototype.getData = function () {
    var data = [];
    var self = this;
    this.source.split('').each(function (item, index) {
        data.push(self.parseSourceItem(item, index));
    });
    return data;
};

z.engine.StaticWorld.prototype.parseSourceItem = function (item, index) {
    var terrain = this.terrainLookup[item];
    if ( !terrain ) {
        terrain = 'unknown';
    }
    return { terrain: terrain };
};

z.engine.StaticWorld.prototype.terrainLookup = {
    g: 'grass',
    w: 'water'
};