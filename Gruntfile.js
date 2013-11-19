module.exports = function (grunt) {

  grunt.initConfig({
      clean: [ 'build/tmp', 'build/deploy' ],
      mkdir: {
        z: {
          options:{
            create: ['build/tmp']
          }
        }
      },
      shell: {
        options: {
          stderr: true,
          failOnError: true,
          execOptions: {
            cwd: 'libs/isogenic-map/libs/ige_prototype'
          }
        },
        isogenic: {
          command: 'node server/ige -deploy ../../../../build/ -clear true'
        }
      },
      closureBuilder:  {
        options: {
          closureLibraryPath: 'libs/closure-library/',
          compilerFile: 'libs/closure-compiler/compiler.jar',
          output_mode: 'compile',
          compile: true,
          inputs: 'js/z.js',
          compilerOpts: {
            compilation_level: 'ADVANCED_OPTIMIZATIONS'
          },
          execOpts: {
            maxBuffer: 999999 * 1024
          }
        },
        z: {
          src: [
            'js',
            'libs/closure-library/'
          ],
          dest: 'build/tmp/zed.js'
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
    }
  )
  ;

// Load plugins here
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-closure-tools');
  grunt.loadNpmTasks('grunt-mkdir');

// Define your tasks here
  grunt.registerTask('default', ['clean', 'mkdir:z', 'shell:isogenic', 'closureBuilder:z']);
  grunt.registerTask('test', ['mkdir:z']);
}
;