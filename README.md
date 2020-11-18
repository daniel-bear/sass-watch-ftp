# sass-watch-ftp
Write in SASS, gulp watch on save, gulp upload CSS to FTP server.

After installing this package, install dependencies:

	run npm install --save-dev gulp gulp-debug gulp-ftp gulp-postcss gulp-sass node-notifier postcss run-sequence autoprefixer

Then go into node_modules/the-end-stream/index.js, near line 51 look for:

	var onclosenexttick = function()
  
Replace the entire function with:

	var onclosenexttick = function() {
		if (cancelled) return;
	};

Configure your paths as outlined in the gulp.js file.

This best works with 2 split terminals open. In VSCode from the top bar menu: Terminal > New Terminal:Split Terminals

Terminal 1

	gulp watch
Terminal 2

	gulp upload

There is also a handy tip in the gulpfile.js to bind shortcut keys to gulp upload instead of typing the command.

If anyone wants to turn this into a GUI go ahead, but gimme link.
