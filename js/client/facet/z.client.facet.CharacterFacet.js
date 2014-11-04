goog.provide('z.client.facet.CharacterFacet');

goog.require('z.client.facet.EntityFacet');
goog.require('z.client.actions.AssignCharacterToProject');


/**
 * @extends {z.client.facet.EntityFacet}
 * @constructor
 */
z.client.facet.CharacterFacet = function () {
  goog.base(this);
  this['name'] = ko.computed(this._getName, this);
  this['health'] = ko.computed(this._getHealth, this);
  this['combat'] = ko.computed(this._getCombat, this);
  this['labour'] = ko.computed(this._getLabour, this);
  this['knowledge'] = ko.computed(this._getKnowledge, this);
  this['gender'] = ko.computed(this._getGender, this);
  this['assignedTo'] = ko.computed(this._getAssignedTo, this);
};

goog.inherits(z.client.facet.CharacterFacet, z.client.facet.EntityFacet);


z.client.facet.CharacterFacet.prototype._getName = function () {
  var character = /** @type {z.common.entities.Character} */ this.entity();
  if (character) {
    return character.name;
  }
  return 0;
};

z.client.facet.CharacterFacet.prototype._getHealth = function () {
  var character = /** @type {z.common.entities.Character} */ this.entity();
  if (character) {
    return character.health;
  }
  return 0;
};

z.client.facet.CharacterFacet.prototype._getCombat = function () {
  var character = /** @type {z.common.entities.Character} */ this.entity();
  if (character) {
    return character.combat;
  }
  return 0;
};

z.client.facet.CharacterFacet.prototype._getLabour = function () {
  var character = /** @type {z.common.entities.Character} */ this.entity();
  if (character) {
    return character.labour;
  }
  return 0;
};

z.client.facet.CharacterFacet.prototype._getKnowledge = function () {
  var character = /** @type {z.common.entities.Character} */ this.entity();
  if (character) {
    return character.knowledge;
  }
  return 0;
};

z.client.facet.CharacterFacet.prototype._getGender = function () {
  var character = /** @type {z.common.entities.Character} */ this.entity();
  if (character) {
    return character.gender;
  }
  return 0;
};

z.client.facet.CharacterFacet.prototype._getAssignedTo = function () {
  var character = /** @type {z.common.entities.Character} */ this.entity();
  if (character) {
    return character.assignedTo;
  }
  return null;
};

z.client.facet.CharacterFacet.prototype._update = function () {
  var character = /** @type {z.common.entities.Character} */ this.entity();
};