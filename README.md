# Gulp CSS Statistics

Gulp plugin version of http://cssstats.com

## Usage

```js
var gulp = require('gulp');
var cssstats = require('gulp-cssstats');

gulp.task('cssstats', function() {
  gulp.src('./base.css')
    .pipe(cssstats())
    .pipe(gulp.dest('./'));
});
```
