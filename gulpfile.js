var gulp = require("gulp");
var sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task("default", function() {
  // we want to run "sass css/app.css app.css --watch"
  return gulp
    .src("css/app.scss")
    .pipe(sass())
    .pipe(gulp.dest("."));
});
