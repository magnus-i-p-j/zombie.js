goog.provide('mugd.editor.EditorViewModel');

goog.require('goog.net.XhrIo');

/**
 * @constructor
 */
mugd.editor.EditorViewModel = function () {
  this['schemaUri'] = ko.observable('../ruleset/main_schema.json');
  this['dataUri'] = ko.observable('../ruleset/main.json');
  this['model'] = ko.observable();
};

mugd.editor.EditorViewModel.prototype['loadModel'] = function () {
  var self = this;
  goog.net.XhrIo.send(self['schemaUri'](),
      function (e) {
        var schema = e.target.getResponseJson();
        goog.net.XhrIo.send(self['dataUri'](),
            function (e) {
              var data = e.target.getResponseJson();
              self['model'](mugd.editor.getViewModel(schema, data));
              self['model']()['fileName'](self['dataUri']().split('/').pop());
            }
        );
      }
  );
};

