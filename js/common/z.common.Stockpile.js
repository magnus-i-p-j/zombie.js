goog.provide('z.common.Stockpile');
goog.require('goog.object');

/**
 * @constructor
 */
z.common.Stockpile = function () {
};

z.common.Stockpile.prototype.addAll = function (values) {
  goog.object.forEach(values, function (amount, name) {
    this.add(name, amount);
  }, this);
};

z.common.Stockpile.prototype.add = function (name, amount) {
  amount = amount || 0;
  if (!this[name]) {
    this[name] = new z.common.StockpiledResource();
  }
  this[name].add(amount);
};

z.common.Stockpile.prototype.purgeAll = function () {
  goog.object.forEach(this, function (amount, name) {
    this.purge(name);
  }, this);
};

z.common.Stockpile.prototype.purge = function (name) {
  if (this[name] && goog.isFunction(this[name].purge)) {
    this[name].purge(name);
  }
};

z.common.Stockpile.prototype.peekAll = function () {
  var response = {};
  goog.object.forEach(this, function (amount, name) {
    var value = this.peek(name);
    if(value !== 0) {
      response[name] = value;
    }
  }, this);
  return response;
};

z.common.Stockpile.prototype.peek = function (name) {
  var amount = 0;
  if (this[name] && goog.isFunction(this[name].peek)) {
    amount = this[name].peek();
  }
  return amount;
};

z.common.Stockpile.prototype.diffAll = function (values) {
  return goog.object.map(values, function (amount, name) {
    return this.diff(name, amount);
  }, this);
};

z.common.Stockpile.prototype.diff = function (name, amount) {
  if (!this[name]) {
    this[name] = new z.common.StockpiledResource();
  }
  return amount - this[name].peek();
};

z.common.Stockpile.prototype.take = function (name, amount) {
  if (!this[name]) {
    return 0;
  }
  return this[name].take(amount);
};

z.common.Stockpile.prototype.isEmpty = function () {
  return !goog.object.getAnyKey(this.peekAll());
};

z.common.Stockpile.prototype.ratioAll = function(values){
  var ratio = 1;
  goog.object.forEach(values, function (amount, name) {
    ratio =  Math.min(this.ratio(name, amount), ratio);
  }, this);
  return ratio;
};

z.common.Stockpile.prototype.ratio = function(name, amount){
  if (!this[name]) {
    this[name] = new z.common.StockpiledResource();
  }
  return this[name].peek() / amount;
};

z.common.Stockpile.prototype.clone = function(){
  if (!this[name]) {
    this[name] = new z.common.StockpiledResource();
  }
  return this[name].peek() / amount;
};
z.common.Stockpile.prototype.clone = function() {
  var response = new z.common.Stockpile();
  goog.object.forEach(this, function(amount, name) {
    var value = this.peek(name);
    if (value !== 0) {
      response.add(name, value);
    }
  }, this);
  return response;
};

/**
 * @constructor
 */
z.common.StockpiledResource = function () {
  this.value = 0;
};

z.common.StockpiledResource.prototype.peek = function () {
  return this.value;
};

z.common.StockpiledResource.prototype.add = function (value) {
  this.value += value;
};

z.common.StockpiledResource.prototype.purge = function () {
  this.value = 0;
};

z.common.StockpiledResource.prototype.take = function (inValue) {
  var value = Math.ceil(inValue);
  var available = Math.min(value, this.value);
  this.value -= available;
  return available;
};