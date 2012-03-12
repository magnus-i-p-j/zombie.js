var z = z || {};
z.util = z.util || {};

//For now a grid is simply a 2d-array, of a fixed size.
z.util.Grid = function(){
    this._offsetX = z.util.Grid.width / 2;
    this._offsetY = z.util.Grid.height / 2;
    this._data = (function(){
        var data = [ ];
        data.length = z.util.Grid.width;
        for(var i = 0; i < z.util.Grid.height; ++i){
            data[i] = [ ];
            data[i].length = z.util.Grid.height;
        }
        return data;
    })();
};

z.util.Grid.width = 500;
z.util.Grid.height = 500;

z.util.Grid.prototype.setNode = function(x, y, node){
    node.x = x;
    node.y = y;
    this._data[x + this._offsetX][y + this._offsetY] = node;
};

z.util.Grid.prototype.getNode = function(x, y){
    return this._data[x + this._offsetX][y + this._offsetY];
};

z.util.Grid.prototype.getAdjacent = function(node){
    return [this.getNode(node.x - 1, node.y + 1), this.getNode(node.x, node.y + 1),
            this.getNode(node.x + 1, node.y),
            this.getNode(node.x + 1, node.y - 1), this.getNode(node.x, node.y - 1),
            this.getNode(node.x - 1, node.y)];
};
