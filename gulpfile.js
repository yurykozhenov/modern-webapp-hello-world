const gulp = require('gulp');
const gutil = require('gulp-util');
const bower = require('bower');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
const sh = require('shelljs');
const gulpWebpack = require('webpack-stream');

const webpackConfig = require('./webpack.config');

const DESTINATION_FOLDER = 'www/';
const paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('webpack', () =>
  gulp.src('src/app.js')
    .pipe(gulpWebpack(webpackConfig))
    .pipe(gulp.dest(DESTINATION_FOLDER))
);

gulp.task('default', ['webpack']);

// Cordova tasks

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
