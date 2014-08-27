goog.provide('z.common.Cashier');

goog.require('goog.object');
goog.require('goog.array');

/**
 * @param {...z.common.Stockpile} stock
 * @constructor
 */
z.common.Cashier = function (stock) {
  /**
   * @type {Array.<z.common.Stockpile>}
   * @private
   */
  this._stockpiles = Array.prototype.slice.call(arguments);
};

z.common.Cashier.prototype.withdraw = function (request) {
  var scale = 1;
  goog.object.forEach(request, function (amount, name) {
        scale = Math.min(scale, this.peek(name) / amount);
      }, this
  );
  var response = goog.object.map(request, function (amount, name) {
        return this.take(name, amount*scale);
      }, this
  );
  return response;
};

z.common.Cashier.prototype.peek = function(name){
  return goog.array.reduce(this._stockpiles, function(result, value) {
    return result + value.peek(name);
  }, 0, this);
};

z.common.Cashier.prototype.take = function(name, amount){
  var taken = 0;
  goog.array.forEach(this._stockpiles, function(value) {
      taken += value.take(name, amount - taken);
  }, this);
  return taken;
};
