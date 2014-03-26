goog.provide('z.common.protocol');

/** @typedef {{
 *   actorId: !mugd.utils.guid,
 *   projects: Array.<!z.common.protocol.project>,
 *   turn: number
 * }}
 */
z.common.protocol.clientEndTurn;

/**
 * @typedef {{
 *  actorId: !mugd.utils.guid,
 *  entities: Array.<!z.common.protocol.entity>,
 *  turn: number
 * }}
 */
z.common.protocol.startTurn;

/**
 * @typedef {{
 *  tileId: mugd.utils.guid,
 *  ownerId: mugd.utils.guid,
 *  x: number,
 *  y: number,
 *  terrain: z.common.terrain,
 *  type: string
 * }}
 */
z.common.protocol.tile;

/**
 * @typedef {{
 *  actorId: mugd.utils.guid,
 *  type: string,
 *  state: !z.common.protocol.state,
 *  stockpile: !Object.<!z.common.protocol.type,number>
 * }}
 */
z.common.protocol.actor;

/** @typedef {{
 *  projectId: !mugd.utils.guid,
 *  ownerId: !mugd.utils.guid,
 *  resources: !Array.<!z.common.protocol.resource>,
 *  investment: !Object.<!z.common.protocol.type,number>,
 *  priority: number,
 *  state: !z.common.protocol.state,
 *  tileId: !mugd.utils.guid,
 *  type: string
 * }}
 */
z.common.protocol.project;

/**
 * @typedef {!z.common.protocol.actor|!z.common.protocol.tile|!z.common.protocol.project}
 */
z.common.protocol.entity;

/** @typedef {!mugd.utils.guid} */
z.common.protocol.resource;

/** @typedef {string} */
z.common.protocol.type;

/**
 * @enum {string}
 */
z.common.protocol.state = {
  MODIFIED: 'modified',
  PASS: 'pass',
  KILL: 'kill',
  DEAD: 'dead'
};