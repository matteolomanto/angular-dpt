(function() {
  "use strict";

  // # Globbing
  // for performance reasons we're only matching one level down:
  // 'test/spec/{,*/}*.js'
  // use this if you want to recursively match all subfolders:
  // 'test/spec/**/*.js'

  module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
      app: require('./bower.json').appPath || 'app',
      dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

      // Project settings
      yeoman: appConfig,

      // The actual grunt server settings
      connect: {
        options: {
          port: 9000,
          // Change this to '0.0.0.0' to access the server from outside.
          hostname: 'localhost',
          livereload: 35730
        },
        livereload: {
          options: {
            open: true,
            middleware: function (connect) {
              return [
                connect.static('.tmp'),
                connect().use(
                  '/bower_components',
                  connect.static('./bower_components')
                ),
                connect.static(appConfig.app)
              ];
            }
          }
        },
        test: {
          options: {
            port: 9001,
            middleware: function (connect) {
              return [
                connect.static('.tmp'),
                connect.static('test'),
                connect().use(
                  '/bower_components',
                  connect.static('./bower_components')
                ),
                connect.static(appConfig.app)
              ];
            }
          }
        },
        dist: {
          options: {
            open: true,
            base: '<%= yeoman.dist %>'
          }
        }
      },

      // Make sure code styles are up to par and there are no obvious mistakes
      jshint: {
        options: {
          jshintrc: '.jshintrc',
          reporter: require('jshint-stylish')
        },
        all: {
          src: [
            'Gruntfile.js',
            '<%= yeoman.app %>/scripts/{,*/}*.js'
          ]
        },
        test: {
          options: {
            jshintrc: 'test/.jshintrc'
          },
          src: ['test/spec/{,*/}*.js']
        }
      },

      // Empties folders to start fresh
      clean: {
        dist: {
          files: [{
            dot: true,
            src: [
              '.tmp',
              '<%= yeoman.dist %>/{,*/}*',
              '!<%= yeoman.dist %>/.git{,*/}*'
            ]
          }]
        }
      },

      // Add vendor prefixed styles
      autoprefixer: {
        options: {
          browsers: ['last 1 version']
        },
        dist: {
          files: [{
            expand: true,
            cwd: '.tmp/styles/',
            src: '{,*/}*.css',
            dest: '.tmp/styles/'
          }]
        }
      },

      // Automatically inject Bower components into the app
      wiredep: {
        app: {
          src: ['<%= yeoman.app %>/index.html'],
          ignorePath:  /\.\.\//,
          devDependencies: true, // default:false
          dependencies: true // default:false
        },
        sass: {
          src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
          ignorePath: /(\.\.\/){1,2}bower_components\//
        }
      },

      // Compiles Sass to CSS and generates necessary files if requested
      compass: {
        options: {
          sassDir: '<%= yeoman.app %>/styles',
          cssDir: '.tmp/styles',
          generatedImagesDir: '.tmp/images/generated',
          imagesDir: '<%= yeoman.app %>/images',
          javascriptsDir: '<%= yeoman.app %>/scripts',
          fontsDir: '<%= yeoman.app %>/styles/fonts',
          importPath: './bower_components',
          httpImagesPath: '../images',
          httpGeneratedImagesPath: '/images/generated',
          httpFontsPath: '/styles/fonts',
          relativeAssets: false,
          assetCacheBuster: false,
          raw: 'Sass::Script::Number.precision = 10\n'
        },
        dist: {
          options: {
            generatedImagesDir: '<%= yeoman.dist %>/images/generated'
          }
        },
        server: {
          options: {
            debugInfo: true
          }
        }
      },

      // Reads HTML for usemin blocks to enable smart builds that automatically
      // concat, minify and revision files. Creates configurations in memory so
      // additional tasks can operate on them
      useminPrepare: {
        html: '<%= yeoman.app %>/index.html',
        options: {
          dest: '<%= yeoman.dist %>'
        }
      },

      // Performs rewrites based on filerev and the useminPrepare configuration
      usemin: {
        html: ["<%= yeoman.dist %>/**/*.html", "!<%= yeoman.dist %>/bower_components/**"],
        css: ["<%= yeoman.dist %>/styles/*.css"],
        options: {
          assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images']
        }
      },

      // ng-annotate tries to make the code safe for minification automatically
      // by using the Angular long form for dependency injection.
      ngAnnotate: {
        dist: {
          files: [{
            expand: true,
            cwd: '.tmp/concat/scripts',
            src: ['*.js', '!oldieshim.js'],
            dest: '.tmp/concat/scripts'
          }]
        }
      },

      // Copies remaining files to places other tasks can use
      copy: {
        dist: {
          files: [{
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.dist %>',
            src: [
              '*.{ico,png,txt}',
              '.htaccess',
              '*.html',
              'views/{,*/}*.html',
              'images/{,*/}*.{webp}',
              'fonts/{,*/}*.*'
            ]
          }, {
            expand: true,
            cwd: "<%= yeoman.app %>/scripts",
            dest: ".tmp/scripts/",
            src: ["**/*"]
          }, {
            expand: true,
            cwd: "<%= yeoman.app %>/images",
            dest: ".tmp/images/",
            src: ["**/*"]
          }]
        },
        styles: {
          expand: true,
          cwd: '<%= yeoman.app %>/styles',
          dest: '.tmp/styles/',
          src: "**/*.css"
        }
      },

      // Test settings
      karma: {
        options: {
          configFile: 'test/karma.conf.js'
        },
        unit: {
          singleRun: true
        },

        continuous: {
          singleRun: false,
          autoWatch: true
        }
      },

      // Watches files for changes and runs tasks based on the changed files
      watch: {
        bower: {
          files: ['bower.json'],
          tasks: ['wiredep']
        },
        js: {
          files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
          tasks: ['newer:jshint:all'],
          options: {
            livereload: '<%= connect.options.livereload %>'
          }
        },
        compass: {
          files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}','<%= yeoman.app %>/styles/{,*/}/{,*/}*.{scss,sass}'],
          tasks: ['compass:server', 'autoprefixer']
        },
        gruntfile: {
          files: ['Gruntfile.js']
        },
        livereload: {
          options: {
            livereload: '<%= connect.options.livereload %>'
          },
          files: [
            '<%= yeoman.app %>/{,*/}*.html',
            '.tmp/styles/{,*/}*.css',
            '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
          ]
        }
      }

    });





    // grunt development task
    grunt.registerTask('dev', [ 'wiredep', 'compass', 'connect:livereload', 'watch' ]);

    // grunt testing task
    grunt.registerTask('test', [ 'wiredep', 'jshint', 'connect:dist', 'karma:continuous' ]);

    // grunt production build task
    grunt.registerTask('prod', [
      'clean',
      'wiredep',
      'jshint',
      'karma:unit',
      'compass',
      'useminPrepare',
      'ngAnnotate',
      'usemin'
    ]);

  };

}).call(this);
