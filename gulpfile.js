var gulp = require('gulp'),
    jade = require('gulp-jade'),
    babel = require('gulp-babel');

gulp.task('template', function() {
  gulp.src('./public/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist/public'))
});

gulp.watch('./public/*.jade', ['template'])
  .on('change', function(event) {
    console.log('Jade converted');
  });

gulp.task('js', function() {
  gulp.src('./routes/*.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('./dist/routes'));

  gulp.src('app.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('./dist'));
  });

gulp.watch('./routes/*.js', ['js'])
  .on('change', function(event) {
    console.log('JavaScript converted');
  });

  gulp.watch('app.js', ['js'])
    .on('change', function(event) {
      console.log('JavaScript converted');
    });
