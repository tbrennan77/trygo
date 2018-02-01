var gulp        = require("gulp");
var changed     = require("gulp-changed-in-place");
var browserSync = require("browser-sync").create();

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
