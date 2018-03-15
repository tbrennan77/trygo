var gulp        = require("gulp");
var changed     = require("gulp-changed-in-place");
var cssnano     = require("cssnano");
var browserSync = require("browser-sync").create();
var postcss     = require("gulp-postcss");
var uglify      = require("gulp-uglify");

gulp.task("watch", ["css"], function() {
  browserSync.init({
    server: "./_site",
    online: false,
    open: false,
    notify: false,
    reloadThrottle: 500,
  });

  gulp.watch("_site/assets/css/*.css", ["css"]);
});

gulp.task("css", function() {
  return gulp.src("_site/assets/css/*.css")
    .pipe(changed())
    .pipe(browserSync.stream());
});

gulp.task("dist:css", function() {
  return gulp.src("_site/assets/css/**/*.css")
    .pipe(postcss([
      cssnano()
    ]))
    .pipe(gulp.dest("_site/assets/css"));
});

gulp.task("dist:js", function() {
  return gulp.src([
      "assets/js/**/*.js",
    ])
    .pipe(uglify())
    .pipe(gulp.dest("_site/assets/js"));
});

gulp.task("dist", function() {
  gulp.start("dist:css");
  gulp.start("dist:js");
});
