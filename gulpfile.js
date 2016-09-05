const gulp = require('gulp');
const gulpWebpack = require('webpack-stream');

const webpackConfig = require('./webpack.config');

const DESTINATION_FOLDER = 'dest/';

gulp.task('webpack', () =>
  gulp.src('src/app.js')
    .pipe(gulpWebpack(webpackConfig))
    .pipe(gulp.dest(DESTINATION_FOLDER))
);

gulp.task('default', ['webpack']);
