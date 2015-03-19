var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('js', function () {
    return gulp.src('js/**/*.js') //select all javascript files under js/ and any subdirectory
        .pipe(concat('concat.min.js')) //the name of the resulting file
        .pipe(uglify())
        .pipe(gulp.dest('min')); //the destination folder
});
