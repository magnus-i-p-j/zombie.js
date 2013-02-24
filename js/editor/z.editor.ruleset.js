goog.provide('z.editor.ruleset');

goog.require('goog.dom');
goog.require('z.common.rulebook');
goog.require('z.editor.ruleset.Schema');


/**
 *
 * @param {string|Element} initElement
 * @param {!Object} schema
 * @return {z.editor.ruleset.Model}
 */
z.editor.ruleset.init = function (initElement, schema) {
  var target = goog.dom.getElement(initElement);
  if (!target) {
    throw 'Could not find element to bind against: ' + initElement;
  }
  infuser.defaults.templatePrefix = './tpl/';

  var model = new z.editor.ruleset.Model(schema);
  ko.applyBindings(model, target);
  return model;
};

/**
 * @constructor
 */
z.editor.ruleset.Model = function (schema) {
  this['improvement'] = ko.observableArray();
  this['terrain'] = ko.observableArray();
  this['item'] = ko.observableArray();
  this['character'] = ko.observableArray();
  this['asset'] = ko.observableArray();
  this['tech'] = ko.observableArray();
  this['schema'] = schema;
  /**
   *
   * @type {Object}
   * @private
   */
  this._types = {};
  this._schema = new z.editor.ruleset.Schema(schema);
};

/**
 *
 * @param {!Object} concepts
 * @param {string} category
 * @param {!z.editor.ruleset.Concept} Ctor
 * @private
 */
z.editor.ruleset.Model.prototype._addCategory = function (concepts, category, Ctor) {
  for (var i in concepts) {
    if (concepts.hasOwnProperty(i)) {
      var subModel = new Ctor(concepts[i]['type']);
      subModel.update(this, concepts[i]);
      this._types[subModel.type] = subModel;
      this[category].push(subModel);
    }
  }
};

/**
 * @param {!Object} ruleset
 */
z.editor.ruleset.Model.prototype.update = function (ruleset) {
  this._types = {};
  this['improvements'].removeAll();
  this._addCategory(ruleset[z.common.rulebook.category.IMPROVEMENT], 'improvements', z.editor.ruleset.Improvement);
};

/**
 * @constructor
 * @implements z.editor.ruleset.Concept
 * @param {string} type
 */
z.editor.ruleset.Improvement = function (type) {
  this.type = type;
  this['name']           = ko.observable();
  this['description']    = ko.observable();
  this['prerequisites']  = ko.observableArray();
  this['cost']           = ko.observableArray();
  this['effect']         = ko.observableArray();
};

/**
 *
 * @param {!z.editor.ruleset.Model} model Used to look up referenced types
 * todo replace with interface?
 * @param {Object} data
 */
z.editor.ruleset.Improvement.prototype.update = function (model, data) {
  this['name'](data['name']);
  this['description'](data['description']);

  // todo make more model-like
  this['prerequisites'].push(data['prerequisites']);
  this['cost'].push(data['cost']);
  this['effect'].push(data['effect']);
};

/**
 * @interface
 * @param {string} type
 */
z.editor.ruleset.Concept = function(type) {};

/**
 * @type {string}
 */
z.editor.ruleset.Concept.prototype.type;

/**
 * @return {Object}
 */
z.editor.ruleset.Concept.prototype.update = function() {};

