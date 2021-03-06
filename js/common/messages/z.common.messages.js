goog.provide('z.common.messages');

/**
 * @enum {string}
 */
z.common.messages.level = {
  USUAL: 'usual',
  IMPORTANT: 'important',
  TRIVIAL: 'trivial'
};

/**
 * @typedef {{
 *   stockpile: Object.<string, number>,
 *   terrain: ?string,
 *   culled: ?number,
 *   text: ?string,
 *   level: ?z.common.messages.level,
 *   points: ?number,
 *   template: string
 * }}
 */
z.common.messages.message;