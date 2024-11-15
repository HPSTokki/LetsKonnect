const {src , dest, watch, series} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css')
const sourceMaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const path = require('path');

const paths = {
    styles: {
        src: path.join(__dirname, 'styles/**/*.scss'),
        dest: path.join(__dirname, 'css')
    }
};

function buildStyles() {
    return src(paths.styles.src)
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourceMaps.write('./'))
    .pipe(dest(paths.styles.dest))
    .pipe(browserSync.stream())
}

function watchTask() {
    watch(paths.styles.src, buildStyles)
}

function browserSyncServe() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    }) 
}

exports.default = series(buildStyles, watchTask, browserSyncServe)