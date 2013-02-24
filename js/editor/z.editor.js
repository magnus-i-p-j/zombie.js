goog.provide('z.editor');

goog.require('z.editor.ruleset');
goog.require('goog.net.XhrIo');

z.editor.init = function () {
  goog.net.XhrIo.send(
      '../js/common/rulebook/concept.json',
      function (e) {
        var schema = e.target.getResponseJson();
        console.log('schema', schema);

        /**
         * @type {z.editor.ruleset.Model}
         */
        var model = z.editor.ruleset.init('main', schema);
        goog.net.XhrIo.send(
            '../js/common/rulebook/ruleset.json',
            function (e) {
              var ruleset = e.target.getResponseJson();
              console.log('ruleset', ruleset);

              var JSV = require("./jsv").JSV;
              var env = JSV.createEnvironment();
              var report = env.validate(ruleset, schema);

              if (report.errors.length === 0) {
                //JSON is valid against the schema

//                  model.update(ruleset);
//                  console.log('model', model);
              }
            }
        );

      }
  );
};