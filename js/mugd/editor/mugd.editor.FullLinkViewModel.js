goog.provide('mugd.editor.FullLinkViewModel');

goog.require('mugd.editor.PrimitiveViewModel');
goog.require('mugd.editor.Link');

/**
 * @param {!Object} schema
 * @param {!mugd.editor.LinkResolver} resolver
 * @implements mugd.editor.IViewModel
 * @extends mugd.editor.PrimitiveViewModel
 * @constructor
 */
mugd.editor.FullLinkViewModel = function (schema, resolver) {
  goog.base(this, schema, resolver);
  this.options = resolver.select(schema);
  this['template']('full-link');

  this._link = new mugd.editor.Link(schema['links']['href']);
  this._link.model(this);
  this._model = ko.observable();

  this['model'] = ko.computed({
    /**
     * @this {mugd.editor.FullLinkViewModel}
     * @returns {mugd.editor.IViewModel}
     */
    'read': function () {
      return this._model();
    },
    /**
     * @this {mugd.editor.FullLinkViewModel}
     * @param {mugd.editor.IViewModel} model
     */
    'write': function (model) {
      if (model.links) {
        if (model.links[0]) {
          this._link.uri(model.links[0].uri());
        }
      }
    }
  }, this);

  this._link.uri.subscribe(
      function (uri) {
        if (uri.substring(0, 4) !== 'guid') {
          resolver.get(uri, this._model);
        }
      },
      this
  );

};
goog.inherits(mugd.editor.FullLinkViewModel, mugd.editor.PrimitiveViewModel);

/**
 * @param {Object} schema
 * @return {boolean}
 */
mugd.editor.FullLinkViewModel.isFullLinkValue = function (schema) {
  return schema['links'] && schema['links']['rel'] === 'full';
};