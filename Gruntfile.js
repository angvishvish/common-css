module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          '',
        ],
        dest: ''
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'app/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    sass: {
      debug: {
        src: [
          'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/bootstrap.scss',
          'common-scss.scss'
        ],
        dest: 'styles.css'
      }
    },
    cssmin: {
      'styles.css': [
        'styles.css'
      ]
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('css', ['less', 'cssmin']);
  //grunt.registerTask('js', ['concat', 'uglify']);

};
