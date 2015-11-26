/*jshint node:true */

'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var spawn = require('child_process').spawn;
var sass = require('gulp-sass');
var sasslint = require('gulp-sass-lint');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  SASS_DIR: 'sass/',
  CSS_DIR: 'content/static/css/',

  init: function () {
    this.SASS = this.SASS_DIR + '**/*.scss';
    return this;
  }
}.init();

var spawned = [];
process.on('exit', function () {
  spawned.forEach(function (p) {
    p.kill();
  });
});

// Execute a command, logging output live while process runs
var spawnTask = function (command, args, cb) {
  spawned.push(
    spawn(command, args, {stdio: 'inherit'})
      .on('error', function (err) {
        cb(err);
        gutil.beep();
      })
      .on('exit', cb)
  );
};

gulp.task('default', ['watch', 'runserver']);

gulp.task('watch', function () {
  // lint and compile scss
  gulp.watch(paths.SASS, ['sasslint', 'sass']);
});

gulp.task('sass', function () {
  return gulp.src(paths.SASS_DIR + '*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.CSS_DIR));
});

var sasslintTask = function (src, failOnError, log) {
  if (log) {
    gutil.log('Running', '\'' + chalk.cyan('sasslint ' + src) + '\'...');
  }
  var stream = gulp.src(src)
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError());
  if (!failOnError) {
    stream.on('error', onError);
  }
  return stream;
};

gulp.task('sasslint', function () {
  return sasslintTask(paths.SASS, true);
});

gulp.task('sasslint-nofail', function () {
  return sasslintTask(paths.SASS);
});

gulp.task('runserver', function (cb) {
  spawnTask('make', ['serve'], cb);
});
