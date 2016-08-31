var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');
var pug = require('gulp-pug');
var rename = require('gulp-rename');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');

gulp.task('stylus', function(){

    return gulp.src('stylus/butns.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
        browsers: ['last 3 versions']
    }))
    .pipe(gulp.dest('dist/'));

});


gulp.task('minify', function(){

    return gulp.src('dist/butns.css')
    .pipe(cleancss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/'));

});

gulp.task('demo-pug', function(){

    return gulp.src('*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'));

});

gulp.task('demo-stylus', function(){

    return gulp.src('demo/stylus/*.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
        browsers: ['last 3 versions']
    }))
    .pipe(cleancss())
    .pipe(gulp.dest('demo/css'));

});

gulp.task('watch', function(){

    gulp.watch('stylus/butns.styl', ['stylus']);
    gulp.watch('dist/butns.css', ['minify']);
    gulp.watch('demo/stylus/*.styl', ['demo-stylus']);
    gulp.watch('*.pug', ['demo-pug']);

});

gulp.task('default', ['watch']);
