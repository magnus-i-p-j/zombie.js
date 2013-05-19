goog.provide('mugd.editor.FullLinkViewModel');

goog.require('mugd.editor.PrimitiveViewModel');
goog.require('mugd.editor.Link');

/**
 * @param {!Object} schema
 * @param {!mugd.editor.LinkResolver} resolver
 * @implements mugd.editor.IViewModel
 * @constructor
 */
mugd.editor.FullLinkViewModel = function (schema, resolver) {
  goog.base(this, schema, resolver);
  this.options = resolver.select(schema);
  this['template']('full-link');

  this._link = new mugd.editor.Link(schema['links']['href']);
  this._link.model(this);

  this['model'] = ko.observable();
  this._onUriChanged = ko.computed(
    function(){
      var uri = this._link.uri();
      if(uri.substring(0,4) !== 'guid'){
        resolver.get(uri, this['model']);
      }
    }
  , this);


};
goog.inherits(mugd.editor.FullLinkViewModel, mugd.editor.PrimitiveViewModel);



/**
 * @param {Object} schema
 * @return {boolean}
 */
mugd.editor.FullLinkViewModel.isFullLinkValue = function (schema) {
  return schema['links'] && schema['links']['rel'] === 'full';
};