var z = z || {};
z.engine = z.engine || {};

z.engine.TrivialMap = function () {
    this.getTiles = function () {
    };
    this.getTile = function () {
        return { terrain: 'terra_incognita' };
    }
};

