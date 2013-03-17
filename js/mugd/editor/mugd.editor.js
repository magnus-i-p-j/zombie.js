goog.provide('mugd.editor');

/**
 * @param {!Object} schema
 * @param {*} data
 */
mugd.editor.getViewModel = function (schema, data) {

  return {
    'title': ko.observable(schema['title']),
    'description': ko.observable(schema['description']),
    'type': ko.observable(schema['type']),
    'value': ko.observable(data)
  };
};