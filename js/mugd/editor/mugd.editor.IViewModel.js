goog.provide('mugd.editor.IViewModel');

/**
 * @interface
 * @extends goog.Disposable.IDisposable
 */
mugd.editor.IViewModel = function () {
};

/**
 * @param {string=} value
 * @return {string}
 */
mugd.editor.IViewModel.prototype.title = function (value) {
};

/**
 * @param {string=} value
 * @return {string}
 */
mugd.editor.IViewModel.prototype.description = function (value) {
};

/**
 * @param {mugd.editor.constants.ValueType=} value
 * @return {!mugd.editor.constants.ValueType}
 */
mugd.editor.IViewModel.prototype.type = function (value) {
};

/**
 * @param {*=} value
 * @return {*}
 */
mugd.editor.IViewModel.prototype.value = function (value) {
};

/**
 * @param {*} value
 */
mugd.editor.IViewModel.prototype.setValue = function (value) {
};
/**
 * @param {string} path
 * @returns {*}
 */
mugd.editor.IViewModel.prototype.fetch = function (path) {
};
/**
 * @param {Array} path
 * @param {int=} index
 * @returns {*}
 */
mugd.editor.IViewModel.prototype.fetchSplitPath = function (path, index) {
};

/**
 * @param {*} value
 */
mugd.editor.IViewModel.prototype.toJSON = function (value) {
};

/**
 *
 */
mugd.editor.IViewModel.prototype.saveModel = function () {
};

/**
 * @type {mugd.editor.LinkResolver}
 */
mugd.editor.IViewModel.prototype.resolver;

