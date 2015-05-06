module.exports = function (grunt) {
  //TODO: split clean
  grunt.initConfig({
      clean: [ 'build/tmp', 'build/deploy', 'tmp/gh_pages' ],
      mkdir: {
        tmp: {
          options:{
            create: [ 'build/tmp', 'build/tmp/js']
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
          command: 'node server/ige -deploy ../../../../build/'
        }
      },
      closureBuilder:  {
        options: {
          closureLibraryPath: 'libs/closure-library/',
          compilerFile: 'libs/closure-compiler/compiler.jar',
          output_mode: 'compile',
          compile: true,
          inputs: ['js/z.js'],
          compilerOpts: {
            //debug: true,
            //formatting:'PRETTY_PRINT',
            compilation_level: 'ADVANCED_OPTIMIZATIONS',
            //compilation_level: SIMPLE_OPTIMIZATIONS
            //compilation_level: 'WHITESPACE_ONLY',
            externs:[
              "libs/externs/knockout-externs.js",
              "libs/externs/jquery-externs.js",
              "libs/externs/templates-externs.js",
              "libs/externs/IMap-externs.js",
              "libs/externs/isogenic_map-externs.js",
              "libs/externs/markdown-externs.js",
              "libs/externs/interact-externs.js"
            ]
          },
          execOpts: {
            maxBuffer: 999999 * 1024
          }
        },
        z: {
          src: [
            'js',
            'libs/closure-library',
            'build/tmp/js'
          ],
          dest: 'build/tmp/js/zed.js'
        }
      },
      rename: {
        isogenic: {
          src: 'build/deploy/game.js',
          dest: 'build/tmp/js/IMap.js'
        }
      },
      less: {
        all: {
          options: {
            relativeUrls: true,
            paths: ["css"],
            cleancss: true
          },
          files: {
            "build/tmp/css/all.css": "css/all.less"
          }
        }
      },
      concat: {
        tpl:{
          options:{
            process: function(src, filepath){
              var id = filepath.replace(/.*tpl\//, '').replace(/\.html/,'');
              return '<script id="' + id + '" type="text/html">\n' + src + '\n</script>'
            }
          },
          src: ['html/tpl/**/*.html'],
          dest: 'build/tmp/tpl.html'
        },
        html:{
          options:{
            banner: '<link rel="stylesheet" type="text/css" href="../css/all.css"> \n'
          },
          src: ['build/tmp/tpl.html', 'html/layout.html'],
          dest: 'build/tmp/html/all.html'
        }
      },
      copy:{
        index:{
          cwd: 'build',
          src:'index.html',
          dest: 'build/deploy/html/',
          filter: 'isFile',
          expand: true
        },
        tmp:{
          cwd: 'build/tmp/',
          src:['css/*', 'html/all.html', 'html/index.html', 'js/*'],
          dest: 'build/deploy/',
          filter: 'isFile',
          expand: true
        },
        libs:{
          cwd: 'bower_components/knockout/dist',
          src:['knockout.js'],
          dest: 'build/deploy/libs',
          filter: 'isFile',
          expand: true
        },
        img:{
          src:'img/**',
          dest: 'build/deploy/',
          filter: 'isFile',
          expand: true
        },
        ruleset:{
          src:'ruleset/**',
          dest: 'build/deploy/',
          filter: 'isFile',
          expand: true
        },
        deploy: {
          cwd: 'build/deploy/',
          src: '**',
          dest: 'build/tmp/gh_pages/eota/',
          filter: 'isFile',
          expand: true
        }
      },
      gitclone: {
        gh_pages: {
          options: {
            branch: "gh-pages",
            directory: "build/tmp/gh_pages",
            repository: "git@github.com:magnus-i-p-j/zombie.js.git"
          }
        }
      },
      gitadd: {
        gh_pages: {
          options: {
            all: true,
            cwd: 'build/tmp/gh_pages'
          }
        }
      },
      gitcommit: {
        gh_pages: {
          options: {
            cwd: 'build/tmp/gh_pages',
            message: 'Automatic build/deploy'
          }
        }
      },
      gitpush: {
        gh_pages: {
          options: {
            cwd: 'build/tmp/gh_pages'
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
  grunt.loadNpmTasks('grunt-rename');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-git');

// Define your tasks here
  grunt.registerTask('isogenic', ['clean', 'shell:isogenic', 'rename:isogenic']);
  grunt.registerTask('copy-default', ['copy:index', 'copy:tmp', 'copy:libs', 'copy:img', 'copy:ruleset']);
  grunt.registerTask('default', ['clean', 'isogenic', 'mkdir', 'closureBuilder:z', 'less', 'concat', 'copy-default', 'gitclone']);
  grunt.registerTask('deploy', ['gitclone', 'copy:deploy', 'gitadd', 'gitcommit', 'gitpush']);

  grunt.registerTask('test', ['closureBuilder:z']);
}
;