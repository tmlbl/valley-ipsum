module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      prod: {
        src: ['src/main.js'],
        dest: 'bundle/ipsum.js',
        options: {
          debug: false
        }
      }
    },
    uglify: {
      prod: {
        src: ['bundle/ipsum.js'],
        dest: 'dest/ipsum.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['browserify', 'uglify']);
};