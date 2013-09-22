goog.provide('z.client.facet.StockpileFacet');

goog.require('z.client.facet.Facet');
goog.require('z.common.Stockpile');
goog.require('goog.object');
goog.require('goog.array');

z.client.facet.StockpileFacet = function () {
  goog.base(this);

  /**
   * @type {function (Array=):!Array}}
   */
  this['resources'] = ko.observableArray();

};

goog.inherits(z.client.facet.StockpileFacet, z.client.facet.Facet);

z.client.facet.StockpileFacet.prototype.update = function (stockpile) {
  var resources = stockpile.peekAll();

  goog.array.forEach(this['resources'](), function (resource) {
    var amount = stockpile.peek(resource['type']);
    resource['amount'](amount);
    delete resources[resource['type']];
  }, this);

  goog.object.forEach(resources, function (amount, resource) {
    this['resources'].push(
    {
      'amount': ko.observable(amount),
      'type': resource
    });
  }, this);
};