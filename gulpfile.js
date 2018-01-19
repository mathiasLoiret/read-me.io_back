var gulp = require('gulp');

var paths = {
  src: 'src/**/*',
  index: 'index.js',
  packa: 'package.json',
  publi:'public/*',
  dist: 'dist'
};


gulp.task('default', function () {
  console.log('Hello World!');
});

gulp.task('src', function () {
  return gulp.src(paths.src, { base: './' }).pipe(gulp.dest(paths.dist));
});

gulp.task('index', function () {
  return gulp.src(paths.index).pipe(gulp.dest(paths.dist));
});

gulp.task('package', function () {
  return gulp.src(paths.packa).pipe(gulp.dest(paths.dist));
});
gulp.task('publi', function () {
  return gulp.src(paths.publi, { base: './' }).pipe(gulp.dest(paths.dist));
});


gulp.task('copy', ['src', 'index', 'package', 'publi']);
