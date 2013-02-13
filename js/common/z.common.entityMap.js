goog.provide('z.common.entityMap');

goog.require('z.common.entities.Tile');
goog.require('mugd.utils');
goog.require('z.common.rulebook.Rulebook');
goog.require('z.common.entities.Actor');

z.common.entityMap = {};
z.common.entityMap[z.common.rulebook.category.IMPROVEMENT] = function(){throw 'not implemented] = improvement'};
z.common.entityMap[z.common.rulebook.category.TERRAIN] = z.common.entities.Tile;
z.common.entityMap[z.common.rulebook.category.ITEM] = function(){throw 'not implemented] = item'};
z.common.entityMap[z.common.rulebook.category.CHARACTER] = function(){throw 'not implemented] = character'};
z.common.entityMap[z.common.rulebook.category.ASSET] = function(){throw 'not implemented] = asset'};
z.common.entityMap[z.common.rulebook.category.ACTOR] = function(){throw 'not implemented] = actor'};
z.common.entityMap[z.common.rulebook.category.TECH] = function(){throw 'not implemented] = tech'};

