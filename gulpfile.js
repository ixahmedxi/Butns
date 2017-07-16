const gulp = require('gulp')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const plumber = require('gulp-plumber')
const rename = require('gulp-rename')

gulp.task('stylus', () => {
	return (
		gulp.src('src/butns.styl')
		.pipe(plumber())
		.pipe(stylus())
		.pipe(autoprefixer())
		.pipe(plumber.stop())
		.pipe(gulp.dest('dist/'))
	)
})

gulp.task('site', () => {
	return (
		gulp.src('site/stylus/style.styl')
		.pipe(plumber())
		.pipe(stylus())
		.pipe(autoprefixer())
		.pipe(csso())
		.pipe(plumber.stop())
		.pipe(gulp.dest('site/css/'))
	)
})

gulp.task('cssmin', () => {
	return (
		gulp.src('dist/butns.css')
		.pipe(plumber())
		.pipe(csso())
		.pipe(rename({suffix: '.min'}))
		.pipe(plumber.stop())
		.pipe(gulp.dest('dist/'))
	)
})

gulp.task('default', ['stylus', 'site', 'cssmin'])

gulp.task('watch', () => {
	gulp.watch('src/*.styl', ['stylus', 'cssmin'])
	gulp.watch('site/stylus/style.styl', ['site'])
})
