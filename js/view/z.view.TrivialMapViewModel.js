var z = z || {};
z.view = z.view || {};

z.view.TrivialMapViewModel = function (trivialMap) {
    this.mapData = ko.observableArray();
    this.load = function () {
        for ( var y = 0; y < 36; ++y ) {
            var row = ko.observableArray();
            row.rowClass = 'e' + y % 2 + 'mod2';
            this.mapData.push(row);
            for ( var x = 0; x < 70; ++x ) {
                var tileVM = new z.view.TrivialTileViewModel(trivialMap.getTile(x, y));
                tileVM.c(x);
                tileVM.r(y);
                row.push(tileVM);
            }
        }
    };
};

z.view.TrivialTileViewModel = function (tile) {
    var self = this;
    this.terrain = ko.observable(tile.terrain);
    this.c = ko.observable();
    this.r = ko.observable();
    this.id = ko.computed(function () {
        return self.c() + ";" + self.r();
    });
    this.terrainClass = ko.computed(function () {
        var mod2 = self.r() % 2;
        var emod2 = ' e' + mod2 + 'mod2';
        return self.terrain() + ' tile' + emod2;
    });
};
