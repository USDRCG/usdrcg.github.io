var gulp = require('gulp'); //default
var sass = require('gulp-sass');//sass complie
var concatCss = require('gulp-concat-css');//compile css plugins into one file
var concat = require('gulp-concat'); //compile js plugins into one file
var watch = require('gulp-watch'); //sass compile to css
 
gulp.task('sass', function () {
  return gulp.src('html/assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('html/assets/css/'));
});
gulp.task('watch', function () {
  gulp.watch('html/assets/scss/**/*.scss', ['sass']);
});
gulp.task('concat', function () {
    return gulp.src(
            [
                'html/assets/js/jquery.min.js',
                 'html/assets/js/tether.min.js',
                'html/assets/bootstrap/js/bootstrap.min.js',
                'html/assets/js/jquery.easing.min.js',
                'html/assets/js/jquery.preloader.min.js',
                'html/assets/js/wow.min.js',
                'html/assets/js/jquery.flexslider-min.js',
                'html/assets/js/modernizr.custom.97074.js',
                'html/assets/js/masonry.pkgd.min.js',
                'html/assets/js/imagesloaded.pkgd.min.js',
                'html/assets/js/jquery.magnific-popup.min.js'               
            ])
            .pipe(concat('plugins.js'))
            .pipe(gulp.dest('html/assets/js/plugins/'));
});
gulp.task('concatCss', function () {
  return gulp.src([
      'html/assets/bootstrap/css/bootstrap.min.css',
      'html/assets/css/flexslider.css',
       'html/assets/css/animate.css',
       'html/assets/icons/css/ionicons.min.css',
       'html/assets/css/magnific-popup.css'
  ])
    .pipe(concatCss("plugins/plugins.css"))
    .pipe(gulp.dest('html/assets/css/'));
});