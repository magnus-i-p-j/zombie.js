var z = z || {};
z.view = z.view || {};

z.view.TrivialMapViewModel = function(trivialMap){
    this.mapData = ko.observableArray();
    this.qwerty = "QWERTY";
    this.load = function(){
        for(var y = 0; y <= 20; ++y){
            this.mapData[y] = ko.observableArray();
            var row = this.mapData[y];
            for(var x = 0; x <= 20; ++x){
                var tileVM = new z.view.TrivialTileViewModel(trivialMap.getTile(x, y));
                row[x] = tileVM;
            }
        }
    };
};

z.view.TrivialTileViewModel = function(tile){
  this.terrain = ko.observable(tile.terrain);
};