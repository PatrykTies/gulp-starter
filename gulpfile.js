var gulp = require('gulp');
//plugins
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
//var changed = require('gulp-changed');
//var plumber = require('gulp-plumber');
//var imagemin = require('gulp-imagemin');
//var cssmin = require('gulp-minify-css');
var sass = require('gulp-sass');
//var uglify = require('gulp-uglify');
var prefixer = require('gulp-autoprefixer');

var SRC = './public/js/**/*.js';
var DEST = 'dist';

var paths = {
	styles:{
		src: './scss/*.scss',
		dest: './public/css/'
	}
};

// A display error function, to format and make custom errors more uniform
// Could be combined with gulp-util or npm colors for nicer output
var displayError = function(error) {

    // Initial building up of the error
    var errorString = '[' + error.plugin + ']';
    errorString += ' ' + error.message.replace("\n",''); // Removes new line at the end

    // If the error contains the filename or line number add it to the string
    if(error.fileName)
        errorString += ' in ' + error.fileName;

    if(error.lineNumber)
        errorString += ' on line ' + error.lineNumber;

    // This will output an error like the following:
    // [gulp-sass] error message in file_name on line 1
    console.error(errorString);
};


gulp.task('sass', function(){
	gulp.src(paths.styles.src)
		.pipe(sass({
			//outputStyle: 'compressed',
      	    sourceComments: 'map',
		}))
		.on('error', function(err){
     	   displayError(err);
   	    })
   	    .pipe(prefixer(
   	    	 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
   	    ))
		.pipe(gulp.dest(paths.styles.dest));
});
 
gulp.task('jshint', function () {
  gulp.src('./*.js')
    .pipe(jshint());
});
 
gulp.task('default', function () {
  nodemon({ script: 'server.js',
          ext: 'html js',
          ignore: ['ignored.js'],
          tasks: ['jshint'] })
    .on('restart', function () {
      console.log('restarted!');
    });
});
/*
gulp.task('jshint', function() {
	gulp.src(SRC)
	.pipe(plumber())
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});



gulp.task('compress-images', function(){
	return gulp.src('img/*.*')
		.pipe(imagemin)({ progressive: true })
		.pipe(gulp.dest('img-dist'));

});

gulp.task('changed', function() {
	return gulp.src(SRC)
	.pipe(changed(DEST))
	.pipe(gulp.dest(DEST));
});

gulp.task('uglify', function(){
	return gulp.src(SRC)
		.pipe(uglify())
		.pipe(gulp.dest('js'));
});

gulp.task('minifycss', function(){
	return gulp.src('./css/style.css')
		.pipe(cssmin({keepSpecialComments: 1}))
		.pipe(gulp.dest('css-dist'));
});
*/
/*
gulp.task('default', ['sass'], function() { 
    // Watch the files in the paths object, and when there is a change, fun the functions in the array
    gulp.watch(paths.styles.src, ['sass'])
    // Also when there is a change, display what file was changed, only showing the path after the 'sass folder'
    .on('change', function(evt) {
        console.log(
            '[watcher] File ' + evt.path.replace(/.*(?=sass)/,'') + ' was ' + evt.type + ', compiling...'
        );
    });
});*/