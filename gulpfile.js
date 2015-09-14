var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var path = require('path');
var browserSync = require('browser-sync');
var livereload = require('gulp-livereload');
var minify = require('gulp-minify');
var reload = browserSync.reload;

gulp.task('compress', function() {
  gulp.src('./js/app.js')
    .pipe(minify({
      ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest('./js/min'))
});

gulp.task('less', function() {
  return gulp.src('./styles/less/styles.less')  // only compile the entry file
    .pipe(less())
    .pipe(prefix("last 8 version", "> 1%", "ie 8", "ie 7"), {cascade:true})
    .pipe(minifyCSS())
    .pipe(gulp.dest('./styles/css'))
    .pipe(livereload());
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './',
    },
    open: false
  });

  gulp.watch(['*.html', 'styles/**/*.less', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, reload);
});

gulp.task('watch', function() {
  // Watch all the .less files, then run the less task
    gulp.watch('./**/*.less', ['less']);
    gulp.watch('./js/app.js', ['compress']);
});

gulp.task('default', ['serve', 'watch', 'compress']);
