goog.provide('mugd.utils');

/**
 * @param {*} n
 * @returns {boolean}
 */
mugd.utils.isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * @param {string=} prefix
 * @param {string=} separator
 * @return {!mugd.utils.guid}
 */
mugd.utils.getGuid = function (prefix, separator) {
  prefix = prefix || '';
  separator = separator || ':';
  if (prefix) {
    return prefix.toString() + separator + mugd.utils._create();
  }
  return mugd.utils._create();
};

/**
 * @return {!mugd.utils.guid}
 * @private
 */
mugd.utils._create = function () {
  return /** @type {!mugd.utils.guid} */ (mugd.utils.EMPTY_GUID.replace(/[0]/g, mugd.utils._selectChar));
};

/**
 * @return {string}
 * @private
 */
mugd.utils._selectChar = function () {
  var index = Math.floor(Math.random() * mugd.utils.CHOOSE_CHARS.length);
  return mugd.utils.CHOOSE_CHARS[index];
};

/**
 * @const
 */
mugd.utils.EMPTY_GUID = '00000-00000-00000-00000-00000-00000';

/**
 * @const
 */
mugd.utils.CHOOSE_CHARS = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789';

/** @typedef {string} */
mugd.utils.guid;

