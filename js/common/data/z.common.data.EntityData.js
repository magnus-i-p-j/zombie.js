goog.provide('z.common.data.EntityData');

/**
 * @interface
 */
z.common.data.EntityData = function(){
};

/**
 * @type {mugd.utils.guid}
 */
z.common.data.EntityData.prototype.guid;

/**
 * @type {string}
 */
z.common.data.EntityData.prototype.type;

/**
 * @type {z.common.rulebook.category}
 */
z.common.data.EntityData.prototype.category;