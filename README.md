# sass-watch-ftp
Write in SASS, auto compile on file save (ctrl+s) with gulp watch, then gulp upload CSS to FTP server (Shift+Space).

Note: If you want use a keybind shortcut (as above Shift+Space) instead of typing gulp upload, then follow the notes in the gulpfile.js

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

If anyone wants to turn this into a GUI go ahead, but gimme link. You could probably pull it off with Electron.
