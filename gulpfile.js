const gulp = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

function liveReload() {
    browserSync.init({
        server: './'
    })
    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('./scss/**/*.scss', compileStyles)
}

function compileStyles() {
    return gulp.src('scss/style.scss')
        .pipe(scss({ outputStyle: 'expanded' }))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream())
}

// function defaultTask(cb) {
//     // place code for your default task here
//     console.log('Privet')
//     cb();
// }

exports.default = liveReload;
exports.scss = compileStyles;