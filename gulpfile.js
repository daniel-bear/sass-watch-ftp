/* This is best operated with split terminals. In Visual Studio code
from the top bar menu select "Terminal", and then "Split terminal".

One terminal will run the gulp watch to look for sass changes.
Terminal two you will use for the command line "gulp upload", or shortcut, as described below.
*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var paths = {
    styles: {
        // Path to your working sass file
        src: 'scss/*.scss',

        // Path to your css output file
        dest: 'css'
    }
}
function scss() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.styles.dest));
}
exports.scss = scss
function watch() {

    scss()
    // Compile when you save your sass file
    return gulp.watch(paths.styles.src, scss);
}
exports.watch = watch

// Configure the path for CSS output to staging/production server
var ftpRemotePath = '/path/to/css/folder/',
    ftpRemoteCSS  = ftpRemotePath + 'css',
    ftpRemoteSASS = ftpRemotePath + 'sass',
    ftpPort        = 21,

    // Configure your host FTP credentials
    ftpHost        = 'your host',
    ftpUsername    = 'ftp username',
    ftpPassword    = 'ftp password',
    ftp             = require('gulp-ftp'),
    runSequence     = require('run-sequence'),
    notifier        = require('node-notifier'),
    debug = require('gulp-debug');
    

    // Run the command "gulp upload" when ready to upload

    // Tip: you can set up a shortcut to upload your css file.
    /* Important: First you need to assign a label to the gulp task "upload".
    
    Press F1 or Ctrl+Shift+P and type "task", and select "Tasks: Configure Task", then select "gulp: upload".
    Paste the settings below into the tasks.json file that opens.
    
    {
	"version": "2.0.0",
	"tasks": [
		{
			"type": "gulp",
			"task": "upload",
			"problemMatcher": [],
			"label": "gulp: upload"
		},
		{
			"type": "gulp",
			"task": "watch",
			"group": "build",
			"problemMatcher": [],
			"label": "gulp: watch"
		}
	]
}
    
    Then locate your keyboard shortcuts JSON file by bring up search using 
    F1 or Ctrl+Shift+P, type "Keyboard Shortcut", and select the JSON.
    Use the below code and use whatever shortcut you want.
    
    {
    "key": "shift+space",  
    "command": "workbench.action.tasks.runTask", 
    "args": "gulp: upload"
  }, */

gulp.task('upload', function() {

    // Configure path for which CSS file is to be uploaded
    return gulp.src('css/*.css')
        .pipe(ftp({
                host: ftpHost,
                port: ftpPort,
                user: ftpUsername,
                pass: ftpPassword,
                remotePath: ftpRemoteCSS
            }));
});


gulp.task('notify', function() {
    notifier.notify({title: 'gulp', message: 'SASS compiled and uploaded'});
});