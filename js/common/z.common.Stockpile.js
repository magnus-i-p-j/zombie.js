goog.provide('z.common.Stockpile');

/**
 * @param {!mugd.injector.MicroFactory} services
 * @constructor
 */
z.common.Stockpile = function (services) {
  var rulebook = /** @type {!z.common.rulebook.Rulebook} */ services.get(z.common.Resources.RULEBOOK);
  goog.array.forEach(rulebook.stockpiledResources, function (meta) {
        this[meta.type] = new z.common.StockpiledResource(meta);
      },this
  );
};

z.common.StockpiledResource = function (meta) {
  this.meta = meta;
  this.value = 0;
};

z.common.StockpiledResource.prototype.peek = function () {
  return this.value;
};

z.common.StockpiledResource.prototype.add = function (value) {
  this.value += value;
};

z.common.StockpiledResource.prototype.take = function (value) {
  var available = Math.min ( value, this.value );
  this.value -= available;
  return available;
};