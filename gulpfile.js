var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

// Static Server + watching scss/html files
gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: './'
    });

    gulp.watch('src/less/*.less', ['less']);
    gulp.watch('index.html').on('change', browserSync.reload);
});

// Compile less into CSS & auto-inject into browsers
gulp.task('less', function() {
    return gulp.src('src/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
