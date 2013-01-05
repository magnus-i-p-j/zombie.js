goog.provide('z.common.protocol');

/** @typedef {{
*   actorId: !mugd.utils.guid,
*   projects: Array.<!z.common.protocol.project>,
*   turn: number
* }} */
z.common.protocol.clientEndTurn;

/**
 * @typedef {{
 *  actorId: !mugd.utils.guid,
 *  tiles: Array.<!z.common.protocol.tile>,
 *  turn: number
 * }}
 */
z.common.protocol.startTurn;

/**
 * @typedef {{
 *  tileId: mugd.utils.guid,
 *  x: number,
 *  y: number,
 *  type: string
 * }}
 */
z.common.protocol.tile;

/** @typedef {{
 *  identifier: !(mugd.utils.guid|z.common.protocol.projectParams),
 *  resources: Array.<!z.common.protocol.resource>,
 *  state: !z.common.protocol.state
 * }} */
z.common.protocol.project;

/** @typedef {!mugd.utils.guid} */
z.common.protocol.resource;

/** @typedef {{
* targetId: !mugd.utils.guid,
* type: string
}} */
z.common.protocol.projectParams;

/**
 * @enum {string}
 */
z.common.protocol.state = {
  NEW:'new',
  DELETE:'delete',
  MODIFIED:'modified',
  PASS:'pass'
};

