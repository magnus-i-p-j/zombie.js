goog.provide('z.common.Cashier');

goog.require('goog.object');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @implements mugd.injector.IInjectable
 * @constructor
 */
z.common.Cashier = function (services) {
  /**
   * @type {!z.common.Stockpile}
   * @private
   */
  this._stock = /** @type {!z.common.Stockpile} */ services.get(z.common.Resources.STOCK);
};

z.common.Cashier.prototype.withdraw = function (request) {
  var scale = 1;
  goog.object.forEach(request, function (amount, name) {
        scale = Math.min(scale, this._stock[name].peek() / amount);
      }, this
  );
  var response = goog.object.map(request, function (amount, name) {
        return this._stock[name].take(amount*scale);
      }, this
  );
  return response;
};