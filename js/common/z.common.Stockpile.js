goog.provide('z.common.Stockpile');
goog.require('goog.object');


/**
 * @param {!mugd.injector.MicroFactory} services
 * @implements mugd.injector.IInjectable
 * @constructor
 */
z.common.Stockpile = function (services) {
  var rulebook = /** @type {!z.common.rulebook.Rulebook} */ services.get(z.common.Resources.RULEBOOK);
  goog.array.forEach(rulebook.stockpiledResources, function (meta) {
        this[meta.type] = new z.common.StockpiledResource(meta);
      }, this
  );
};

z.common.Stockpile.prototype.add = function (values) {
  goog.object.forEach(values, function (amount, name) {
    this[name].add(amount);
  }, this);
};

z.common.Stockpile.prototype.diff = function (values) {
  return goog.object.map(values, function (amount, name) {
    return amount - this[name].peek();
  }, this);
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

z.common.StockpiledResource.prototype.take = function (inValue) {
  var value = Math.ceil(inValue);
  var available = Math.min(value, this.value);
  this.value -= available;
  return available;
};