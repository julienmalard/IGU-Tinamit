var gulp = require('gulp');
var rikonem = require('gulp-load-plugins')();

var ruxeel = "./ruxe'el";
var relesaxïk = "./relesaxïk";

gulp.task('css', function() {
  return gulp.src(ruxeel + "/chjl/css/**/*.less")
    .pipe(rikonem.less())
    .pipe(rikonem.csscomb())
    .pipe(gulp.dest(relesaxïk + "/chjl/css/"));
});

gulp.task('js', function() {
  return gulp.src(ruxeel + "/**/*.js")
    .pipe(rikonem.babel())
    .pipe(gulp.dest(relesaxïk))
});

gulp.task('koolirisaj', function() {
  return gulp.src(relesaxïk + "/chjl/css/*.css")
    .pipe(rikonem.csso())
    .pipe(rikonem.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(relesaxïk + "/chjl/css/"));
});

gulp.task('tabana', ['css', 'js']);

gulp.task('taelesaj', ['tabana', 'koolirisaj']);

gulp.task('tatzu', function() {
  gulp.watch(ruxeel + "/chjl/css/**/*.less", ['css']);
  gulp.watch(ruxeel + "/**/*.js", ['js']);
});

gulp.task('default', ['tabana'])
