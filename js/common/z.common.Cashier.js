goog.provide('z.common.Cashier');

goog.require('goog.object');

/**
 * @param {!z.common.Stockpile} stock
 * @constructor
 */
z.common.Cashier = function (stock) {
  /**
   * @type {!z.common.Stockpile}
   * @private
   */
  this._stock = stock;
};

z.common.Cashier.prototype.withdraw = function (request) {
  var scale = 1;
  goog.object.forEach(request, function (amount, name) {
        scale = Math.min(scale, this._stock.peek(name) / amount);
      }, this
  );
  var response = goog.object.map(request, function (amount, name) {
        return this._stock.take(name, amount*scale);
      }, this
  );
  return response;
};

