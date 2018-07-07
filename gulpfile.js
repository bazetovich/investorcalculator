const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = webpackStream.webpack;
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const htmlToJs = require('gulp-html-to-js');
const sequence = require('run-sequence');
const del = require('del');

gulp.task('clean', ['clean:build', 'clean:templates']);

gulp.task('clean:build', function() {
    return del('pgbuild/www');
});

gulp.task('clean:templates', function() {
    return del('generated/templates');
});

gulp.task('index.html', function() {
    return gulp.src('index.html')
        .pipe(gulp.dest('pgbuild/www'));
});

gulp.task('images', function() {
    return gulp.src('images/**/*.*')
        .pipe(gulp.dest('pgbuild/www/images'));
});

gulp.task('icons-and-splashes', function() {
    return gulp.src('icons-psd/res/**/*.*')
        .pipe(gulp.dest('pgbuild/res'));
});

gulp.task('styles', function() {
    return gulp.src('styles/index.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest('pgbuild/www/css'));
});

gulp.task('templates', function() {
    return gulp.src('templates/**/*.html')
        .pipe(htmlToJs())
        .pipe(gulp.dest('generated/templates'));
});

gulp.task('fonts', function() {
    return gulp.src('fonts/*.*')
        .pipe(gulp.dest('pgbuild/www/fonts'));
});

gulp.task('webpack', function(cb) {
    let config = require('./webpack.config.js');
    let firstBuildReady = false;

    return gulp.src('scripts/app.js')
        .pipe(webpackStream(config(false), null, function(err, stats) {
            firstBuildReady = true;

            /*if (err) {
                return;
            }*/
        }))
        .pipe(gulp.dest('pgbuild/www/js'))
        .on('data', function() {
            if (firstBuildReady && !cb.called) {
                cb.called = true;
                cb();
            }
        });
});

gulp.task('webpack-prod', function() {
    let config = require('./webpack.config.js');

    return gulp.src('scripts/app.js')
        .pipe(webpackStream(config(true)))
        .pipe(gulp.dest('pgbuild/www/js'))
});

gulp.task('build', ['index.html', 'images', 'templates', 'server-templates', 'fonts', 'styles'])

gulp.task('watch', function() {
    gulp.watch('index.html', ['index.html']);
    gulp.watch('styles/**/*.*', ['styles']);
    gulp.watch('templates/**/*.html', ['templates']);
    gulp.watch('templates/**/*.hbs', ['server-templates']);
})

gulp.task('dev', function(cb) {
    sequence('clean', 'build', 'webpack', 'watch', cb);
});

gulp.task('prod', function(cb) {
    sequence('clean', 'build', 'icons-and-splashes', 'webpack-prod', cb);
});

// server tasks

const gulpHandlebars = require('gulp-handlebars');
const handlebars = require('handlebars');
const defineModule = require('gulp-define-module');

gulp.task('server-templates', function() {
    return gulp.src('templates/email/**/*.hbs')
        .pipe(gulpHandlebars({handlebars: handlebars}))
        .pipe(defineModule('node'))
        .pipe(gulp.dest('server/app/templates'));
});
