module.exports = function (grunt) {

  grunt.initConfig({
    clean: [ 'build/tmp', 'build/deploy' ],
    shell: {
      isogenic: {
        command: 'node server/ige -deploy ../../../../build/ -clear true',
        options: {
          stderr: true,
          failOnError: true,
          execOptions: {
            cwd: 'libs/isogenic-map/libs/ige_prototype'
          }
        }
      }
    },
    copy: {
      a: {
        files: {
          'build/tmp/a.js': ['js/client/z.client.action.js']
        }
      },
      b: {
        files: {
          'build/tmp/': ['js/client/User.js']
        }
      }
    }
  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-shell');

  // Define your tasks here
  grunt.registerTask('default', ['clean','shell:isogenic']);
};