var z = z || {};
z.util = z.util || {};

z.util.Rectangle = function(top, right, bottom, left){

    if(top <= bottom || right <= left){
        throw {name: 'Invalid geometry'};
    }

    this.top = top || null;
    this.right = right || null;
    this.bottom = bottom || null;
    this.left = left || null;

};

