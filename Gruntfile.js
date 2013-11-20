module.exports = function (grunt) {

  grunt.initConfig({
      clean: [ 'build/tmp', 'build/deploy' ],
      mkdir: {
        tmp: {
          options:{
            create: [ 'build/tmp']
          }
        },
        deploy: {
          options:{
            create: [ 'build/deploy']
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
            'libs/closure-library',
            'build/tmp'
          ],
          dest: 'build/tmp/zed.js'
        }
      },
      rename: {
        isogenic: {
          src: 'build/deploy/game.js',
          dest: 'build/tmp/IMap.js'
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
  grunt.loadNpmTasks('grunt-rename');


// Define your tasks here
  grunt.registerTask('isogenic', ['clean', 'shell:isogenic', 'rename:isogenic']);
  grunt.registerTask('default', ['clean', 'isogenic', 'mkdir', 'closureBuilder:z']);
  grunt.registerTask('test', ['mkdir']);
}
;