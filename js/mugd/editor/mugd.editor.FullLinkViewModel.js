goog.provide('mugd.editor.FullLinkViewModel');

goog.require('mugd.editor.AbstractViewModel');

/**
 * @param {!Object} schema
 * @param {!mugd.editor.LinkResolver} resolver
 * @implements mugd.editor.IViewModel
 * @constructor
 */
mugd.editor.FullLinkViewModel = function(schema, resolver){
  goog.base(this, schema, resolver);


};
goog.inherits(mugd.editor.FullLinkViewModel, mugd.editor.AbstractViewModel);

/**
 * @param {Object} schema
 * @return {boolean}
 */
mugd.editor.FullLinkViewModel.isFullLinkValue = function(schema){
  return schema['links'] &&  schema['links']['rel'] === 'full';
};