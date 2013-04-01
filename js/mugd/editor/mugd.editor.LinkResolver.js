goog.provide('mugd.editor.LinkResolver');

/**
 * @constructor
 */
mugd.editor.LinkResolver = function () {
};

/**
 * @param {string} uri
 * @return {*}
 */
mugd.editor.LinkResolver.prototype.resolveLink = function (uri) {
  return {
    "type": "water",
    "name": "Water"
  };
};

/**
 * @param {string} uri
 * @return {*}
 */
mugd.editor.LinkResolver.prototype.setModel = function (model) {
  this.model = model;
};

