goog.provide('z.common.protocol');

/** @typedef {{
* id: z.util.guid,
* projects: z.common.protocol.project[]
* }} */
z.common.protocol.clientEndTurn;

/** @typedef {string} */
z.util.guid;

/** @typedef {{
* identifier: (z.util.guid|z.common.protocol.projectParams),
* resources: z.common.protocol.resource[],
* state: z.common.protocol.state
* }} */
z.common.protocol.project;


/** @typedef {z.util.guid} */
z.common.protocol.resource;

/** @typedef {{
* targetId: guid,
* type: string
}} */
z.common.protocol.projectParams;

/**
 * @enum {string}
 */
z.common.protocol.state = {
  NEW: 'new',
  DELETE: 'delete',
  MODIFIED: 'modified',
  PASS: 'pass'
};

