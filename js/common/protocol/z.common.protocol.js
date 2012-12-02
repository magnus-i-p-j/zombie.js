goog.provide('z.common.protocol');

/** @typedef {{
* id: mugd.utils.guid,
* projects: z.common.protocol.project[]
* }} */
z.common.protocol.clientEndTurn;

/** @typedef {{
* identifier: (mugd.utils.guid|z.common.protocol.projectParams),
* resources: z.common.protocol.resource[],
* state: z.common.protocol.state
* }} */
z.common.protocol.project;


/** @typedef {mugd.utils.guid} */
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

