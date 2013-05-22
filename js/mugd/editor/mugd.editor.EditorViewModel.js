goog.provide('mugd.editor.EditorViewModel');

goog.require('mugd.editor');
goog.require('goog.net.XhrIo');

/**
 * @constructor
 */
mugd.editor.EditorViewModel = function () {
  this['schemaUri'] = ko.observable('../js/common/rulebook/z.common.rulebook.test_schema.json');
  this['dataUri'] = ko.observable('../js/common/rulebook/z.common.rulebook.test.json');
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

